import {database, auth} from '../firebaseApp';

export const getCircleProgress = (radius, percent = 0) => {
  const circumference = Math.PI * (2 * radius);

  const dasharray = circumference - ((percent / 100) * circumference)

  return {circumference, dasharray};
}

export const validateEmpty = value => !!value.trim();
export const validateIdentity = (str1, str2) => str1 === str2;

export const objToArray = (obj) => Object.keys(obj).map(key => obj[key]);

export const getFirstLesson = ({ subject, progress }) => {
  let targetLessonId,
        detected = false;

  debugger;

  for (let lesson in progress) {
    if (!(progress[lesson].completed) && !detected) {
      targetLessonId = lesson;
      detected = true;
    }
  }

  return subject.lessons.find(lesson => lesson.id === targetLessonId);
}

export const createHTML = html => ({__html: html});

export const getTotal = (obj) => {
  let total = 0;

  objToArray(obj).forEach(subject => {
    objToArray(subject).forEach(lesson => {
      lesson = objToArray(lesson);
      for (let i = 0; i < lesson.length; i++) {
        if (typeof lesson[i] == 'object')
          total++;
        }
      })
  })

  return total;
}

export const listenToPractice = async () => {
  try {
    const ref = database.ref('practice');
    const snapshot = await ref.once('value');

    await auth.signInAnonymously().then(info => {
      database.ref(`users/${info.uid}/progress`).set({
        ...snapshot.val()
      })
    })

  } catch (e) {
    console.error(e.message);
  }
}

export const findNotCompleted = subjects => {
  let targetLessonId = '',
        detected = false;

  for (let subject in subjects) {
    for (let lesson in subjects[subject]) {
      objToArray(subjects[subject][lesson]).forEach(ex => {
        if (typeof ex == 'object' && !ex.completed && !detected) {
          targetLessonId = lesson;
          detected = !detected;
        }
      })
    }
  }

  return targetLessonId;
}

export const getCompleted = (subjects) => {
  let counter = 0;

  objToArray(subjects).forEach(subject => {
    objToArray(subject).forEach(lesson => {
      if (lesson.completed) {
        objToArray(lesson).forEach(ex => {
            if (typeof ex == 'object')
              counter++;
          }
        )
      }
    })
  })

  return counter;
}

export const getSubjectPercentage = subject => {
  subject = objToArray(subject);
  let completedCount = 0;
  if (subject.length > 0) {
    subject.forEach(lesson => {
      if (lesson.completed) {
              completedCount++;
        }
      }
    );

    return completedCount * 100 / subject.length ^ 0;
  }
  return completedCount;
}

function modifyWorker(worker) {
    if (worker.handsShaking) {
        worker.bloodAlcoholLevel += worker.experience * worker.weight * 0.1;
        worker.handsShaking = false;
    }

    return worker;
}

console.log(modifyWorker({ weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false }

));
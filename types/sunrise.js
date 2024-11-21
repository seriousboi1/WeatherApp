function PresentSunrise() {
    console.log("Entered sunrise animation JS");
    const cloud1 = document.getElementById('cloud1');
    const cloud2 = document.getElementById('cloud2');
    const cloud3 = document.getElementById('cloud3');
    const cloud4 = document.getElementById('cloud4');
    const cloud5 = document.getElementById('cloud5');
    const cloud6 = document.getElementById('cloud6');
    const cloud7 = document.getElementById('cloud7');
    const cloud8 = document.getElementById('cloud8');
    const cloud9 = document.getElementById('cloud9');
    const cloud10 = document.getElementById('cloud10');
    const cloud11 = document.getElementById('cloud11');
    const cloud12 = document.getElementById('cloud12');
    const cloud13 = document.getElementById('cloud13');
    const cloud14 = document.getElementById('cloud14');

    cloud1.style.animation = 'moveCloudInitial 59s linear 1';
    cloud2.style.animation = 'moveCloudInitial 60s linear 1';
    cloud3.style.animation = 'moveCloudInitial 64s linear 1';
    cloud4.style.animation = 'moveCloudInitial 56s linear 1';
    cloud5.style.animation = 'moveCloudInitial 58s linear 1';
    cloud6.style.animation = 'moveCloudInitial 59s linear 1';
    cloud7.style.animation = 'moveCloudInitial 63s linear 1';
    cloud8.style.animation = 'moveCloudInitial 60s linear 1';
    cloud9.style.animation = 'moveCloudInitial 57s linear 1';
    cloud10.style.animation = 'moveCloudInitial2 87s linear 1';
    cloud11.style.animation = 'moveCloudInitial2 81s linear 1';
    cloud12.style.animation = 'moveCloudInitial2 87s linear 1';
    cloud13.style.animation = 'moveCloudInitial2 82s linear 1';
    cloud14.style.animation = 'moveCloudInitial2 85s linear 1';

    cloud1.addEventListener('animationend', () => { cloud1.style.animation = 'moveCloudLoop 59s linear infinite'; });
    cloud2.addEventListener('animationend', () => { cloud2.style.animation = 'moveCloudLoop 60s linear infinite'; });
    cloud3.addEventListener('animationend', () => { cloud3.style.animation = 'moveCloudLoop 64s linear infinite'; });
    cloud4.addEventListener('animationend', () => { cloud4.style.animation = 'moveCloudLoop 56s linear infinite'; });
    cloud5.addEventListener('animationend', () => { cloud5.style.animation = 'moveCloudLoop 58s linear infinite'; });
    cloud6.addEventListener('animationend', () => { cloud6.style.animation = 'moveCloudLoop 59s linear infinite'; });
    cloud7.addEventListener('animationend', () => { cloud7.style.animation = 'moveCloudLoop 63s linear infinite'; });
    cloud8.addEventListener('animationend', () => { cloud8.style.animation = 'moveCloudLoop 60s linear infinite'; });
    cloud9.addEventListener('animationend', () => { cloud9.style.animation = 'moveCloudLoop 57s linear infinite'; });
    cloud10.addEventListener('animationend', () => { cloud10.style.animation = 'moveCloudLoop2 87s linear infinite'; });
    cloud11.addEventListener('animationend', () => { cloud11.style.animation = 'moveCloudLoop2 81s linear infinite'; });
    cloud12.addEventListener('animationend', () => { cloud12.style.animation = 'moveCloudLoop2 87s linear infinite'; });
    cloud13.addEventListener('animationend', () => { cloud13.style.animation = 'moveCloudLoop2 82s linear infinite'; });
    cloud14.addEventListener('animationend', () => { cloud14.style.animation = 'moveCloudLoop2 85s linear infinite'; });
};

document.getElementById('moon').addEventListener('click', () => {
    alert('You clicked the moon!');
});
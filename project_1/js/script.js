function myFirstApp(name, age) {

    alert('Hello, my name is ' + name + ' and this my first app!');

    function showSkills() {
        let skills = ['html', 'css', 'javascript', 'jquery', 'angular'];
        for (let i = 0; i < skills.length; i++) {
            document.write('I own ' + skills[i] + '!' + '<br>');
        }
    }

    showSkills();

    function checkAge() {
        if (age > 18) {
            alert('I can go to the Harvard!');
        } else {
            alert('Sorry, i am still small!');
        }
    }
    checkAge();
    
    function calcPow(num) {
        console.log(num * num);
    }

    calcPow(10);
}

myFirstApp('Alex', 30);
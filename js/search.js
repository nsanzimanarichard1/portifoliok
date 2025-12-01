document.addEventListener('DOMContentLoaded', () =>{
    let keyword = [
        'HTML',
        'CSS',
        'EASY TOTURIAL',
        'Web design tutorials',
        'Javscripts',
        'Where to learn coding  online',
        'Where to learn web design',
        'How to create a website',
    ];

    const resultBox = document.querySelector(".result-box");
    const inputBox = document.getElementById("input-box");

    inputBox.onkeyup = () => {
        let result = [];
        let input = inputBox.value;

        if (input.length) {
            result = keyword.filter((word) => {
                return word.toLowerCase().includes(input.toLowerCase());
            });
        }
        console.log(result);

        display(result); // Call display function here
    };

    // Function to display searched items on the screen
    function display(result) {
        const content = result.map((text) => {
            return "<li onclick=selectText(this)>" + text + "</li>";
        });
        resultBox.innerHTML = "<ul>" + content.join('') + "</ul>"; // Use join to convert array to string
    }

    function selectText(text) {
        inputBox.value = text.innerHTML;
        resultBox.innerHTML = '';

        
    }

    // Expose selectText function to the global scope
    window.selectText = selectText;
});

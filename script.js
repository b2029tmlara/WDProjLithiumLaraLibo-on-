window.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(localStorage.getItem("pianoUserData"));
    if (!data) return; // nothing to show

    // Only add the container once
    if (document.getElementById('ppp-links-container')) return;

    const signUpSection = document.querySelector('a.visitButton').parentElement;

// Avoid adding multiple containers
if (!document.querySelector('.dynamic-container')) {

    const dynamicContainer = document.createElement('div');
    dynamicContainer.classList.add('dynamic-container'); // NEW class, not index-container

    dynamicContainer.innerHTML = `
        <div class="explainSection">
            <p style="font-size: 20px;">
                Congratulations, ${data.fullName}! Your Piano Practice Plan pages are ready. 
                Click the links below to view your personalized practice plan and supplementary resources.
            </p>
        </div>

        <div class="containerPPP">
            <div class="sixthPage">
                <div class="ppp-box">
                    <p class="ppppage-description"> PRACTICE PLAN </p>
                    <p>
                        <button class="ppppageButton"><a href="./ProjectPages/Page6.html"> VISIT </a></button>
                    </p>
                </div>
            </div>

            <div class="seventhPage">
                <div class="ppp-box">
                    <p class="ppppage-description"> RESOURCES </p>
                    <p>
                        <a class="ppppageButton" href="./ProjectPages/Page7.html"> VISIT </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;

    signUpSection.appendChild(dynamicContainer);
}
});
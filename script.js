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
                <div class="black-box">
                    <p class="page-description"> PRACTICE PLAN </p>
                    <p>
                        <button class="pageButton"><a href="./ProjectPages/Page6.html"> VISIT </a></button>
                    </p>
                </div>
                <div class="empty-box">
                    <img src="./assets/Page6cover.jpg" alt="Practice Plan" class="right-image">
                    <p class="caption">Your Personalized Practice Plan</p>
                </div>
            </div>

            <div class="seventhPage">
                <div class="black-box right-align">
                    <p class="page-description"> SUPPLEMENTARY RESOURCES </p>
                    <p>
                        <button class="pageButton"><a href="./ProjectPages/Page7.html"> VISIT </a></button>
                    </p>
                </div>
                <div class="empty-box">
                    <img src="./assets/Page7cover.jpg" alt="Supplementary Resources" class="right-image">
                    <p class="caption">Recommended Resources & Songs</p>
                </div>
            </div>
        </div>
    `;

    signUpSection.appendChild(dynamicContainer);
}
});
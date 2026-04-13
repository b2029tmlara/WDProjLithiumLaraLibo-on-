window.addEventListener('DOMContentLoaded', () => {
    const data = JSON.parse(localStorage.getItem("pianoUserData"));
    if (!data) return; // nothing to show

    // Only add the container once
    if (document.getElementById('ppp-links-container')) return;

    const signUpSection = document.querySelector('a.visitButton').parentElement;

    // Avoid adding multiple containers
    if (!document.querySelector('.dynamic-container')) {

        // 1. REMOVE THE ORIGINAL "SIGN UP" TEXT AND BUTTON
        const originalExplain = signUpSection.querySelector('.explainSection');
        const originalSignUpButton = signUpSection.querySelector('a.visitButton');
        
        if (originalExplain) originalExplain.remove();
        if (originalSignUpButton) originalSignUpButton.remove();

        // 2. CREATE THE NEW CONTAINER
        const dynamicContainer = document.createElement('div');
        dynamicContainer.classList.add('dynamic-container'); // NEW class, not index-container

        // 3. ADD YOUR NEW CONTENT AND THE UPDATE/DELETE BUTTONS
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

            <div style="text-align: center; margin-top: 30px; display: flex; justify-content: center; gap: 20px;">
                <a href="./ProjectPages/Page5.html" id="updatePppBtn" class="visitButton" >UPDATE PPP</a>
                <button id="deletePppBtn" class="visitButton" style="cursor: pointer; ">DELETE PPP</button>
            </div>
        `;

        signUpSection.appendChild(dynamicContainer);

        // 4. ADD FUNCTIONALITY TO THE DELETE AND UPDATE BUTTON
        document.getElementById('deletePppBtn').addEventListener('click', () => {
            // Remove the data and reload the page so the sign-up section comes back
            localStorage.removeItem("pianoUserData");
            window.location.reload(); 
            confirmAction()
        });
        document.getElementById('updatePppBtn').addEventListener('click', () => {
            confirmAction()
        });
        function confirmAction(type) {
            const message = type === 'submit' 
                ? "Are you sure you want to update your application?" 
                : "Are you sure you want to clear all entered information?";
            return confirm(message);
        }
    }
});
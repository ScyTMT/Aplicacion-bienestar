document.addEventListener('DOMContentLoaded', () => {
    // Elementos de las secciones y botones
    const rewardsSection = document.getElementById('rewards-section');
    const routinesSection = document.getElementById('routine-section');
    const communitySection = document.getElementById('community-section');
    const nutritionSection = document.getElementById('nutrition-section');
    const rewardsTab = document.getElementById('rewards-tab');
    const routineTab = document.getElementById('routine-tab');
    const nutritionTab = document.getElementById('nutrition-tab');
    const communityTab = document.getElementById('community-tab');
    const rewardsNav = document.getElementById('rewards-nav');
    const routineNav = document.getElementById('routine-nav');
    const nutritionNav = document.getElementById('nutrition-nav');

    // Función para mostrar la sección seleccionada
    function mostrarSeccion(seccionMostrar, ...seccionOcultar) {
        seccionMostrar.classList.remove('hidden');
        seccionOcultar.forEach(seccion => {
            if (seccion) {
                seccion.classList.add('hidden');
            }
        });
    }

    function activarPestana(pestanaActiva, ...pestanasDesactivas) {
        pestanaActiva.classList.add('active');
        pestanasDesactivas.forEach(pestana => {
            if (pestana) {
                pestana.classList.remove('active');
            }
        });
    }

    rewardsTab.addEventListener('click', () => {
        mostrarSeccion(rewardsSection, routinesSection, communitySection, nutritionSection);
        activarPestana(rewardsTab, routineTab, communityTab, nutritionTab);
        activarClaimButtons(); // Re-activar botones "Reclamar"
    });

    routineTab.addEventListener('click', () => {
        mostrarSeccion(routinesSection, rewardsSection, communitySection, nutritionSection);
        activarPestana(routineTab, rewardsTab, communityTab, nutritionTab);
    });

    communityTab.addEventListener('click', () => {
        mostrarSeccion(communitySection, rewardsSection, routinesSection, nutritionSection);
        activarPestana(communityTab, rewardsTab, routineTab, nutritionTab);
    });

    nutritionTab.addEventListener('click', () => {
        mostrarSeccion(nutritionSection,communitySection, rewardsSection, routinesSection);
        activarPestana(nutritionTab, communityTab, rewardsTab, routineTab);
    });


    rewardsNav.addEventListener('click', () => {
        mostrarSeccion(rewardsSection, routinesSection, communitySection, nutritionSection);
        activarPestana(rewardsTab, routineTab, communityTab, nutritionTab);
        activarClaimButtons(); // Re-activar botones "Reclamar"
    });

    routineNav.addEventListener('click', () => {
        mostrarSeccion(routinesSection, rewardsSection, communitySection, nutritionSection);
        activarPestana(routineTab, rewardsTab, communityTab, nutritionTab);
    });

    nutritionNav.addEventListener('click', () => {
        mostrarSeccion(nutritionSection,communitySection, rewardsSection, routinesSection);
        activarPestana(nutritionTab, communityTab, rewardsTab, routineTab);
    });


    // Función para activar botones "Reclamar" en la sección de Recompensas
    function activarClaimButtons() {
        const claimButtons = document.querySelectorAll('.claim-btn:not([disabled])');
        claimButtons.forEach(button => {
            button.addEventListener('click', () => {
                const card = button.closest('.reward-card');
                const rewardTitle = card.querySelector('h4').textContent;
                alert(`¡Recompensa "${rewardTitle}" reclamada con éxito!`);
            });
        });
    }

    // Activar botones "Reclamar" inicialmente
    activarClaimButtons();
});

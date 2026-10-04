/* =========================================
   SCROLL REVEAL
========================================= */

const items =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


items.forEach(item => {

    observer.observe(item);

});


/* =========================================
   PROJECT DATA
========================================= */

const projects = {

    frc: {

        icon: "🤖",

        date: "2022 · FIRST",

        title: "My first FRC robot",

        intro:
            "My entry point into competitive robotics, where programming, electronics, mechanisms, and teamwork became one engineering puzzle.",

        role:
            "Programmer / builder",

        tools:
            "Java · WPILib · Electronics",

        focus:
            "Robotics",

        documentation:
            "This is where I learned to turn an idea into something a robot could actually execute. Add build photos, wiring diagrams, code, match footage, awards, failures, and redesigns here."

    },


    ftc: {

        icon: "💻",

        date: "2023 · COMMUNITY",

        title: "Teaching FTC coding",

        intro:
            "Mentoring younger students in programming and power management taught me that understanding a system and explaining a system are different skills.",

        role:
            "Mentor / instructor",

        tools:
            "Java · FTC SDK · Teaching",

        focus:
            "Education",

        documentation:
            "Add the curriculum, student projects, lessons learned, and examples of how I helped beginners build their first working robot."

    },


    unicycle: {

        icon: "🛞",

        date: "2024 · BUILD",

        title: "Self-balancing unicycle",

        intro:
            "A personal mechatronics project combining a VESC, ESP32 display, custom KiCad schematics, CAD, sensors, and control logic.",

        role:
            "Designer / engineer",

        tools:
            "ESP32 · VESC · KiCad · CAD",

        focus:
            "Mechatronics",

        documentation:
            "Add the design requirements, circuit schematic, CAD screenshots, control approach, testing data, failures, revisions, and final results."

    },


    ocean: {

        icon: "🌊",

        date: "2025 · RESEARCH",

        title: "AI + ocean data",

        intro:
            "An exploration of machine learning applied to Hawaiʻi ocean data and environmental questions.",

        role:
            "Researcher",

        tools:
            "Python · ML · Data",

        focus:
            "Environmental AI",

        documentation:
            "Add the research question, dataset, preprocessing, models tested, graphs, accuracy metrics, limitations, and conclusions."

    },


    frog: {

        icon: "🐸",

        date: "2026 · CAPSTONE",

        title: "Peakaboo Frog",

        intro:
            "A cute floating frog camera designed to let kids peek into the world of native oʻopu fish while keeping the engineering behind the scenes.",

        role:
            "Lead designer / engineer",

        tools:
            "Computer Vision · ESP32 · Web",

        focus:
            "Educational robotics",

        documentation:
            "Add frog housing sketches, camera setup, fish-detection approach, sensor data, web interface, prototype testing, and design decisions."

    },


    lantern: {

        icon: "🔗",

        date: "2026 · COMMUNITY",

        title: "LanternLink",

        intro:
            "A technology project focused on making online safety and suspicious-purchase detection more approachable for older adults.",

        role:
            "Founder / developer",

        tools:
            "AI · Web · UX",

        focus:
            "Accessible technology",

        documentation:
            "Add the problem, user research, system architecture, interface decisions, model behavior, testing, and how the project evolved."

    }

};


/* =========================================
   MODAL ELEMENTS
========================================= */

const modal =
    document.getElementById(
        "projectModal"
    );

const modalIcon =
    document.getElementById(
        "modalIcon"
    );

const modalDate =
    document.getElementById(
        "modalDate"
    );

const modalTitle =
    document.getElementById(
        "modalTitle"
    );

const modalIntro =
    document.getElementById(
        "modalIntro"
    );

const modalRole =
    document.getElementById(
        "modalRole"
    );

const modalTools =
    document.getElementById(
        "modalTools"
    );

const modalFocus =
    document.getElementById(
        "modalFocus"
    );

const modalDoc =
    document.getElementById(
        "modalDoc"
    );


/* =========================================
   OPEN PROJECT
========================================= */

const cards =
    document.querySelectorAll(
        "[data-project]"
    );


cards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            const project =
                projects[
                    card.dataset.project
                ];

            if (!project) return;


            modalIcon.textContent =
                project.icon;

            modalDate.textContent =
                project.date;

            modalTitle.textContent =
                project.title;

            modalIntro.textContent =
                project.intro;

            modalRole.textContent =
                project.role;

            modalTools.textContent =
                project.tools;

            modalFocus.textContent =
                project.focus;

            modalDoc.textContent =
                project.documentation;


            modal.classList.add("open");

            document.body.style.overflow =
                "hidden";

        }
    );

});


/* =========================================
   CLOSE MODAL
========================================= */

const closeModal = () => {

    modal.classList.remove("open");

    document.body.style.overflow =
        "";

};


document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        closeModal
    );


/* CLICK OUTSIDE */

modal.addEventListener(
    "click",
    event => {

        if (
            event.target === modal
        ) {

            closeModal();

        }

    }
);


/* ESCAPE KEY */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();

        }

    }
);


/* =========================================
   BACK TO TOP
========================================= */

const goTop = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};


document
    .getElementById("top")
    .addEventListener(
        "click",
        goTop
    );


document
    .getElementById("footerTop")
    .addEventListener(
        "click",
        goTop
    );


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeButton =
    document.getElementById(
        "theme"
    );


themeButton.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "dark"
        );

    }
);
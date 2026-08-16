/* =====================================================
   BRAMBABS MAHLAULE PORTFOLIO
   INTERACTIVE FUNCTIONS
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


if (menuToggle && navLinks) {

    menuToggle.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("open");

        }
    );


    navLinks
        .querySelectorAll("a")
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks.classList.remove(
                        "open"
                    );

                }
            );

        });

}



/* =====================================================
   CURRENT YEAR
===================================================== */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



/* =====================================================
   HEADER SCROLL EFFECT
===================================================== */

const header =
    document.querySelector(".site-header");


window.addEventListener(
    "scroll",
    function () {

        if (!header) return;


        if (window.scrollY > 60) {

            header.classList.add(
                "scrolled"
            );

        } else {

            header.classList.remove(
                "scrolled"
            );

        }

    }
);



/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-links a"
    );


function updateNavigation() {

    let currentSection = "";


    sections.forEach(
        function (section) {

            const sectionTop =
                section.offsetTop - 180;


            if (
                window.scrollY >=
                sectionTop
            ) {

                currentSection =
                    section.id;

            }

        }
    );


    navigationLinks.forEach(
        function (link) {

            link.classList.remove(
                "active"
            );


            const linkTarget =
                link.getAttribute(
                    "href"
                );


            if (
                linkTarget ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateNavigation
);



/* =====================================================
   MY JOURNEY STORY
===================================================== */

const journeyStories = {


    story1: {

        number: "01",

        label: "WHERE I STARTED",

        title: "Building My Foundation",

        text: `

            <p>
                My journey began with my Bachelor of
                Construction studies, which provided me
                with a broad understanding of the built
                environment and the different disciplines
                that contribute to a successful construction
                project.
            </p>

            <p>
                Through my studies, I developed an
                understanding of construction technology,
                quantity surveying, project management,
                construction processes and the importance
                of accurate project information.
            </p>

            <p>
                This academic foundation gave me the
                opportunity to understand construction
                not only from the perspective of putting
                buildings together, but also from the
                perspective of planning, measuring,
                managing and controlling construction work.
            </p>

        `

    },


    story2: {

        number: "02",

        label: "ENTERING THE INDUSTRY",

        title: "Turning Theory Into Practice",

        text: `

            <p>
                Moving from the academic environment into
                the construction industry gave me the
                opportunity to begin applying the knowledge
                I had developed during my studies to real
                construction situations.
            </p>

            <p>
                This stage of my development helped me
                appreciate that construction is not only
                about technical knowledge. Accuracy,
                communication, documentation, time,
                cost and coordination all play an important
                role in delivering a successful project.
            </p>

            <p>
                Practical exposure also strengthened my
                interest in the commercial side of
                construction and encouraged me to develop
                further within quantity surveying.
            </p>

        `

    },


    story3: {

        number: "03",

        label: "QUANTITY SURVEYING",

        title: "Developing My QS Skills",

        text: `

            <p>
                As my professional development progressed,
                quantity surveying became an increasingly
                important part of my career direction.
            </p>

            <p>
                I developed practical exposure to the
                preparation and review of Bills of Quantities,
                quantity measurement, construction rate
                assessment, cost estimation and tender
                documentation.
            </p>

            <p>
                I also gained a greater appreciation for
                the role of accurate cost information in
                supporting project decisions. A Quantity
                Surveyor must understand both the numbers
                and the construction work behind those
                numbers.
            </p>

            <p>
                This has encouraged me to continuously
                improve my measurement, documentation,
                commercial awareness and cost management
                abilities.
            </p>

        `

    },


    story4: {

        number: "04",

        label: "REAL PROJECTS",

        title: "Working With Real Construction Information",

        text: `

            <p>
                Working with real construction projects has
                allowed me to see how drawings, Bills of
                Quantities, specifications, site conditions
                and project documentation come together.
            </p>

            <p>
                My project exposure has included school and
                building-related construction work, site
                inspections, project reporting, construction
                documentation, drawing interpretation and
                quantity surveying activities.
            </p>

            <p>
                These experiences have taught me the
                importance of checking information carefully
                before it reaches a client or contractor.
                Small errors in drawings, quantities,
                descriptions or documentation can have a
                significant effect on a project.
            </p>

            <p>
                This is one of the reasons I place strong
                emphasis on quality checking and professional
                presentation of construction information.
            </p>

        `

    },


    story5: {

        number: "05",

        label: "WHERE I AM GOING",

        title: "Building The Next Chapter",

        text: `

            <p>
                I see my professional journey as a
                continuous process of learning,
                developing and taking on greater
                responsibility within the construction
                industry.
            </p>

            <p>
                My goal is to continue strengthening my
                quantity surveying and construction
                capabilities while gaining deeper
                experience in cost management, contract
                administration, project delivery and
                commercial construction.
            </p>

            <p>
                I am also interested in the opportunities
                created by technology and digital
                construction. I believe that combining
                construction knowledge with modern digital
                tools can improve the way project
                information is measured, managed,
                communicated and controlled.
            </p>

            <p>
                Ultimately, I want to become a highly
                capable construction professional who can
                contribute value to projects from tender
                stage through construction and ultimately
                project completion.
            </p>

        `

    }

};



const journeyCards =
    document.querySelectorAll(
        ".journey-card"
    );


const storyNumber =
    document.getElementById(
        "storyNumber"
    );


const storyLabel =
    document.getElementById(
        "storyLabel"
    );


const storyTitle =
    document.getElementById(
        "storyTitle"
    );


const storyText =
    document.getElementById(
        "storyText"
    );



function showJourneyStory(
    storyKey
) {

    const story =
        journeyStories[storyKey];


    if (!story) return;


    storyNumber.textContent =
        story.number;


    storyLabel.textContent =
        story.label;


    storyTitle.textContent =
        story.title;


    storyText.innerHTML =
        story.text;


    journeyCards.forEach(
        function (card) {

            card.classList.remove(
                "active"
            );


            if (
                card.getAttribute(
                    "data-story"
                ) === storyKey
            ) {

                card.classList.add(
                    "active"
                );

            }

        }
    );


    const storyPanel =
        document.getElementById(
            "storyPanel"
        );


    storyPanel.style.opacity =
        "0";


    storyPanel.style.transform =
        "translateY(10px)";


    setTimeout(
        function () {

            storyPanel.style.opacity =
                "1";

            storyPanel.style.transform =
                "translateY(0)";

        },
        120
    );

}



journeyCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                const storyKey =
                    card.getAttribute(
                        "data-story"
                    );


                showJourneyStory(
                    storyKey
                );

            }
        );

    }
);



/* =====================================================
   PROJECT FILTERING
===================================================== */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {


                filterButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const filter =
                    button.getAttribute(
                        "data-filter"
                    );


                projectCards.forEach(
                    function (card) {

                        const category =
                            card.getAttribute(
                                "data-category"
                            );


                        if (
                            filter === "all" ||
                            category === filter
                        ) {

                            card.style.display =
                                "";

                            setTimeout(
                                function () {

                                    card.style.opacity =
                                        "1";

                                    card.style.transform =
                                        "translateY(0)";

                                },
                                20
                            );

                        }

                        else {

                            card.style.opacity =
                                "0";

                            card.style.transform =
                                "translateY(15px)";

                            setTimeout(
                                function () {

                                    card.style.display =
                                        "none";

                                },
                                250
                            );

                        }

                    }
                );

            }
        );

    }
);



/* =====================================================
   PROJECT MODAL
===================================================== */

const projectInformation = {


    site: {

        category:
            "SITE EXPERIENCE",

        title:
            "Construction Site Experience",

        body: `

            <p>
                Practical construction exposure has
                allowed me to develop a better understanding
                of how construction activities are implemented
                on site and how site information relates to
                project documentation.
            </p>

            <p>
                Site experience has also strengthened my
                appreciation for progress monitoring,
                quality observations, communication and
                accurate project records.
            </p>

            <ul>

                <li>
                    Construction site observations
                </li>

                <li>
                    Site establishment
                </li>

                <li>
                    Progress assessment
                </li>

                <li>
                    Project documentation
                </li>

                <li>
                    Construction coordination
                </li>

            </ul>

        `

    },


    drawing: {

        category:
            "TECHNICAL DRAWINGS",

        title:
            "Architectural & Construction Drawings",

        body: `

            <p>
                Construction drawings form an important part
                of quantity surveying and project delivery.
                They provide the information required to
                understand the scope, dimensions and
                construction requirements of a project.
            </p>

            <p>
                My experience includes reviewing and
                interpreting drawing information to support
                quantity measurement, construction
                understanding and project documentation.
            </p>

            <ul>

                <li>
                    Floor plans
                </li>

                <li>
                    Elevations
                </li>

                <li>
                    Sections
                </li>

                <li>
                    Building dimensions
                </li>

                <li>
                    Roof information
                </li>

                <li>
                    Construction details
                </li>

            </ul>

        `

    },


    qs: {

        category:
            "QUANTITY SURVEYING",

        title:
            "BOQ & Cost Management",

        body: `

            <p>
                Quantity surveying is one of the central
                areas of my professional development.
                My practical exposure has included the
                preparation and review of Bills of Quantities,
                measurement, construction rates and tender
                documentation.
            </p>

            <p>
                I understand the importance of accurate
                quantities and clear descriptions because
                project costs depend heavily on the quality
                of the underlying measurement and project
                information.
            </p>

            <ul>

                <li>
                    Bills of Quantities
                </li>

                <li>
                    Quantity take-offs
                </li>

                <li>
                    Construction rate assessment
                </li>

                <li>
                    Cost estimation
                </li>

                <li>
                    Tender documentation
                </li>

                <li>
                    Cost control support
                </li>

            </ul>

        `

    },


    completed: {

        category:
            "PROJECT EXPERIENCE",

        title:
            "Construction Project Delivery",

        body: `

            <p>
                Exposure to completed construction works
                has helped me understand the relationship
                between design information, construction
                activities, quality, progress and project
                completion.
            </p>

            <p>
                Seeing construction work progress from
                planning and documentation through
                implementation and completion has helped
                strengthen my understanding of the complete
                project lifecycle.
            </p>

            <ul>

                <li>
                    Construction progress
                </li>

                <li>
                    Quality observations
                </li>

                <li>
                    Project documentation
                </li>

                <li>
                    Completion requirements
                </li>

                <li>
                    Practical construction understanding
                </li>

            </ul>

        `

    }

};



const modal =
    document.getElementById(
        "projectModal"
    );


const modalClose =
    document.getElementById(
        "modalClose"
    );


const modalCategory =
    document.getElementById(
        "modalCategory"
    );


const modalTitle =
    document.getElementById(
        "modalTitle"
    );


const modalBody =
    document.getElementById(
        "modalBody"
    );



function openProject(
    projectKey
) {

    const project =
        projectInformation[
            projectKey
        ];


    if (!project) return;


    modalCategory.textContent =
        project.category;


    modalTitle.textContent =
        project.title;


    modalBody.innerHTML =
        project.body;


    modal.classList.add(
        "show"
    );


    document.body.classList.add(
        "modal-open"
    );

}



function closeProject() {

    modal.classList.remove(
        "show"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeProject
    );

}


if (modal) {

    modal.addEventListener(
        "click",
        function (event) {

            if (
                event.target === modal
            ) {

                closeProject();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape"
        ) {

            closeProject();

        }

    }
);



/* =====================================================
   SCROLL REVEAL ANIMATION
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".about-story, " +
        ".highlight-card, " +
        ".skill-card, " +
        ".experience-item, " +
        ".project-card, " +
        ".capability-card, " +
        ".contact-message, " +
        ".contact-link"
    );


revealElements.forEach(
    function (element) {

        element.classList.add(
            "reveal"
        );

    }
);



const revealObserver =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },

        {
            threshold: 0.12

        }

    );


revealElements.forEach(
    function (element) {

        revealObserver.observe(
            element
        );

    }
);



/* =====================================================
   SIMPLE TYPING EFFECT
===================================================== */

const typingTitle =
    document.getElementById(
        "typingTitle"
    );


const typingText =
    "Quantity Surveyor & Construction Professional";


if (typingTitle) {

    typingTitle.textContent =
        "";


    let index = 0;


    function typeTitle() {

        if (
            index <
            typingText.length
        ) {

            typingTitle.textContent +=
                typingText.charAt(index);


            index++;


            setTimeout(
                typeTitle,
                45
            );

        }

    }


    setTimeout(
        typeTitle,
        700
    );

}



/* =====================================================
   INITIAL MESSAGE
===================================================== */

console.log(
    "Brambabs Mahlaule Portfolio Loaded Successfully."
);

console.log(
    "Professional portfolio with interactive journey loaded."
);
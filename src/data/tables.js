const tables = {

    courseSequence: [
        [{ t: "", b: true }, { t: "First Year", b: true }, { t: "Second Year", b: true }, { t: "Third Year", b: true }, { t: "Fourth Year", b: true }],
        [{ t: "Regular", b: true }, { t: "Python A/B" }, { t: "AP CSP" }, { t: "AP CSA" }, { t: "Advanced AB" }],
        [{ t: "Accelerated", b: true }, { t: "AP CSP" }, { t: "AP CSA" }, { t: "Advanced AB" }, { t: "Honors Cyber Security" }],
        [{ t: "Nosebleed", b: true }, { t: "AP CSA" }, { t: "Advanced AB" }, { t: "Honors Cyber Security" }, { t: "Teaching Assistant" }],
    ],
    freshmanCourse: [
        [{ t: "AP Computer Science A", b: true }, { t: "AP Computer Science Principles", b: true }, { t: "Python A", b: true }, { t: "Intro CS", b: true }],
        [
            {
                t: "Freshman are strongly discouraged from taking APCSA. Please consider taking AP CSP. Consideration may be given to students entering Westhill who will be taking Honors Pre-Calc in their freshman year."
            },
            {
                t: "Ideal freshman candidates for APCSP will be those students who are placing out of Algebra 1 and will be taking Honors Geometry (or another honors math class) in their first year of High School. "
            },
            {
                t: "Ideal freshman candidates for this course consist of students who have a personal interest in computers and have at least a C average in their last math class in middle school."
            },
            {
                t: " Ideal freshman candidates for this course consist of students who do not meet any of the above criteria."
            },
        ]
    ]
};

export default tables;
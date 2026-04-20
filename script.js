// =======================================================
// QUIZ DATA FILE
// This file contains all the lessons and questions.
// =======================================================

// --- LESSON DEFINITIONS ---
const lessons = [
    {
        id: 'cell_biology_revision',
        title: 'Cell Cycle, Mitosis, and Stem Cells',
        description: '3rd quarter revision covering cell size, cell cycle, mitosis, regulation, cancer, binary fission, and stem cell differentiation.',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`
    }
];

// --- QUESTION BANK ---
const allQuestions = [
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 1,
        passage: "",
        prompt: "1. If a cell cannot move enough material through its membrane to survive, then the ratio of its surface area to volume is:",
        options: ["a. too large.", "b. just the right size.", "c. too small.", "d. growing too quickly."],
        providedAnswer: 2,
        correctAnswer: 2,
        correctAnswerText: "c. too small.",
        explanation: "As a cell grows, its volume increases much faster than its surface area. If the surface area to volume ratio is too small, the cell's membrane does not have enough surface area to transport nutrients in or wastes out efficiently to support its internal volume."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 2,
        passage: "",
        prompt: "2. Before a cell can proceed to mitosis from the gap 2 stage of the cell cycle, it must:",
        options: ["a. double in size.", "b. complete a full cell cycle.", "c. undergo cytokinesis.", "d. pass a critical checkpoint."],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d. pass a critical checkpoint.",
        explanation: "At the end of the G2 phase, there is a critical checkpoint (the G2 checkpoint) where the cell ensures DNA was copied correctly and is undamaged before allowing the cell to enter mitosis."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 3,
        passage: "",
        prompt: "3. During interphase a cell grows, duplicates organelles, and:",
        options: ["a. copies DNA.", "b. divides the nucleus.", "c. divides the cytoplasm.", "d. produces a new cell."],
        providedAnswer: 0,
        correctAnswer: 0,
        correctAnswerText: "a. copies DNA.",
        explanation: "Interphase consists of the G1, S (Synthesis), and G2 phases. During the S phase of interphase, the cell synthesizes a complete, identical copy of the DNA in its nucleus."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 4,
        passage: "",
        prompt: "4. Why do the cells lining the stomach divide more quickly than those in the liver?",
        options: ["a. They are much smaller cells.", "b. They have fewer chromosomes.", "c. They need much more surface area.", "d. They undergo more wear and tear."],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d. They undergo more wear and tear.",
        explanation: "The stomach lining is continuously exposed to a highly acidic and harsh environment, causing those cells to undergo frequent wear and tear. Therefore, they must divide rapidly to replace damaged or dead cells."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 5,
        passage: "<p><i>[Figure 5.1 is a pie chart of the cell cycle showing the following sequential stages: gap 1, synthesis, gap 2, and mitosis.]</i></p>",
        prompt: "5. During which of the following stages shown in Figure 5.1 (a pie chart of the cell cycle) does the cytoplasm of a cell divide?",
        options: ["a. gap 1", "b. synthesis", "c. gap 2", "d. mitosis"],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d. mitosis",
        explanation: "Cytokinesis is the specific process where the cytoplasm divides. Although technically distinct from the nuclear division (mitosis), it occurs at the end of the overall mitotic phase (M phase), which is broadly labeled as 'mitosis' in this diagram."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 6,
        passage: "",
        prompt: "6. Kinases and cyclins are internal factors that:",
        options: ["a. cause apoptosis.", "b. control the cell cycle.", "c. cause cancer cells to break away.", "d. prevent mitosis."],
        providedAnswer: 1,
        correctAnswer: 1,
        correctAnswerText: "b. control the cell cycle.",
        explanation: "Cyclins and kinases (specifically cyclin-dependent kinases, or CDKs) are internal regulatory proteins that interact to control the progression of the cell cycle, signaling the cell to advance to the next phase."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 7,
        passage: "",
        prompt: "7. Proteins from outside a cell that stimulate it to divide are called:",
        options: ["a. oncogenes.", "b. stem cells.", "c. cyclins.", "d. growth factors."],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d. growth factors.",
        explanation: "Growth factors are external chemical signals (proteins) secreted by other cells that bind to receptors on the cell surface, stimulating the receiving cell to divide."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 8,
        passage: "<p><i>[Figure 5.2 shows a single replicated chromosome with an 'X' shape.]</i></p>",
        prompt: "8. Which statement describes the chromosome shown in Figure 5.2?",
        options: ["a. It is made up of two histones.", "b. It is made up of two chromatids.", "c. It is made up of two centromeres.", "d. It is made up of two telomeres."],
        providedAnswer: 1,
        correctAnswer: 1,
        correctAnswerText: "b. It is made up of two chromatids.",
        explanation: "An 'X-shaped' chromosome is a replicated chromosome consisting of two identical halves called sister chromatids. They are joined together at a central region called the centromere."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 9,
        passage: "",
        prompt: "9. In a single-celled organism, mitosis is used for:",
        options: ["a. development.", "b. reproduction.", "c. growth.", "d. repair."],
        providedAnswer: 1,
        correctAnswer: 1,
        correctAnswerText: "b. reproduction.",
        explanation: "In single-celled (unicellular) organisms, cell division via mitosis creates a completely new, independent, and genetically identical organism. Thus, it serves as a primary method of asexual reproduction."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 10,
        passage: "",
        prompt: "10. Which of the following is true of malignant tumors?",
        options: ["a. They do not require treatment.", "b. They are easily removed through surgery.", "c. They can cause tumors in other parts of the body.", "d. They contain cells that stay clustered together."],
        providedAnswer: 2,
        correctAnswer: 2,
        correctAnswerText: "c. They can cause tumors in other parts of the body.",
        explanation: "Malignant tumors consist of cancer cells that can break away (metastasize) and travel through the bloodstream or lymphatic system to form secondary tumors elsewhere in the body."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 11,
        passage: "",
        prompt: "11. One difference between a cancer cell and a normal cell is that:",
        options: ["a. cancer cells divide uncontrollably.", "b. normal cells divide uncontrollably.", "c. cancer cells cannot make copies of DNA.", "d. normal cells cannot make copies of DNA."],
        providedAnswer: 0,
        correctAnswer: 0,
        correctAnswerText: "a. cancer cells divide uncontrollably.",
        explanation: "Cancer is fundamentally characterized by a loss of normal cell cycle regulation. Unlike normal cells, cancer cells bypass regulatory checkpoints and divide uncontrollably."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 12,
        passage: "",
        prompt: "12. Which statement about the process of binary fission is true?",
        options: ["a. It does not involve the division of cytoplasm.", "b. It does not require any duplication of DNA.", "c. It does not take place in multicellular organisms.", "d. It does not produce genetically identical offspring."],
        providedAnswer: 2,
        correctAnswer: 2,
        correctAnswerText: "c. It does not take place in multicellular organisms.",
        explanation: "Binary fission is a method of asexual reproduction utilized specifically by single-celled prokaryotes (like bacteria). Multicellular organisms use mitosis for growth/repair, and distinct mechanisms for reproduction."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 13,
        passage: "",
        prompt: "13. A plant's leaf consists of:",
        options: ["a. a group of organs.", "b. various types of tissue.", "c. organs that form a system.", "d. many identical cells."],
        providedAnswer: 1,
        correctAnswer: 1,
        correctAnswerText: "b. various types of tissue.",
        explanation: "In biological hierarchy, a leaf is considered an organ. An organ is composed of various interacting tissues (such as dermal, ground, and vascular tissues) working together to perform a specific function."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 14,
        passage: "",
        prompt: "14. Cells in a developing embryo differentiate based on:",
        options: ["a. their location in the embryo.", "b. symmetry in the first division.", "c. their particular DNA.", "d. secretions from the embryo."],
        providedAnswer: 0,
        correctAnswer: 0,
        correctAnswerText: "a. their location in the embryo.",
        explanation: "During embryonic development, a cell's final location in the embryo determines the local chemical signals it receives. These signals dictate which genes are expressed, thereby steering its differentiation into a specialized cell type."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 15,
        passage: "",
        prompt: "15. Which organism is capable of reproduction through asexual mitosis?",
        options: ["a. horse", "b. oak tree", "c. bacterium", "d. starfish"],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d. starfish",
        explanation: "Starfish can reproduce asexually through fragmentation and regeneration, a process entirely driven by mitosis. Bacteria (c) reproduce asexually as well, but they utilize binary fission rather than mitosis."
    },
    {
        type: 'grid-in',
        lessonId: 'cell_biology_revision',
        originalNumber: 16,
        passage: "<p><i>[Figure 5.3 shows four diagrams labeled A, B, C, and D representing stages of cell division. Stage A shows normal cell progression. Stage B shows condensed paired chromosomes (Prophase). Stage C shows chromosomes aligned in the middle. Stage D shows sister chromatids separated into two new forming nuclei (Telophase).]</i></p>",
        prompt: "16. What is the name of the process shown in the diagram? (The letters are for identification, but do not indicate the order of the process.)",
        correctAnswerText: "Mitosis",
        explanation: "The diagram depicts a single cell with paired chromosomes separating to form two distinct nuclei, which are the hallmark stages of mitosis (and cytokinesis)."
    },
    {
        type: 'grid-in',
        lessonId: 'cell_biology_revision',
        originalNumber: 17,
        passage: "<p><i>[Figure 5.3 shows four diagrams labeled A, B, C, and D representing stages of cell division.]</i></p>",
        prompt: "17. Write the letter of the stage in the cycle that occurs last.",
        correctAnswerText: "D",
        explanation: "Stage D illustrates telophase and the onset of cytokinesis, where the cell is actively pinching into two distinct daughter cells. This is the final stage of the cell division process shown."
    },
    {
        type: 'essay',
        lessonId: 'cell_biology_revision',
        originalNumber: 18,
        passage: "<p><i>[Figure 5.3 shows four diagrams labeled A, B, C, and D representing stages of cell division.]</i></p>",
        prompt: "18. How are sister chromatids represented in the diagram?",
        correctAnswerText: "They are represented as the two identical halves of the 'X' shaped chromosomes (seen clearly in stage C).",
        explanation: "Sister chromatids are the identical copies formed by the DNA replication of a chromosome. In the diagrams (especially B and C), they are visually represented as the two distinct arms that make up the 'X' shape before being pulled apart."
    },
    {
        type: 'essay',
        lessonId: 'cell_biology_revision',
        originalNumber: 19,
        passage: "<p><i>[Figure 5.3 shows four diagrams labeled A, B, C, and D representing stages of cell division.]</i></p>",
        prompt: "19. Describe the events that take place in part B in the diagram.",
        correctAnswerText: "This is Prophase. The nuclear envelope breaks down, and chromatin condenses into visible chromosomes.",
        explanation: "Part B represents prophase, the first stage of mitosis. The key features to recognize are the condensation of DNA into recognizable, thick 'X-shaped' chromosomes and the degradation of the nuclear membrane."
    },
    {
        type: 'essay',
        lessonId: 'cell_biology_revision',
        originalNumber: 20,
        passage: "<p><i>[Figure 5.3 shows four diagrams labeled A, B, C, and D representing stages of cell division.]</i></p>",
        prompt: "20. How are the chromosomes shown in part B different from the chromosomes shown in part D?",
        correctAnswerText: "In part B, chromosomes are condensed and paired. In part D, the sister chromatids have separated and are forming two new nuclei.",
        explanation: "During prophase (B), chromosomes consist of two joined sister chromatids. By telophase (D), anaphase has already occurred, meaning those chromatids were successfully pulled apart and each is now an individual, un-paired chromosome in a newly forming nucleus."
    },
    {
        type: 'grid-in',
        lessonId: 'cell_biology_revision',
        originalNumber: 20,
        passage: "<p><i>[Figure 5.4 shows a fertilized egg developing into an inner cell mass, which is then grown in a Petri dish and differentiates into specialized cells: muscle cells, neurons, and red blood cells.]</i></p>",
        prompt: "20. Name one type of cell shown in the diagram that is multipotent.",
        correctAnswerText: "Red blood cells (or muscle cells / neurons)",
        explanation: "While the final diagram shows specialized end-products (muscle cells, neurons, red blood cells), these specific specialized tissues are the result of intermediate multipotent stem cells differentiating along specific paths."
    },
    {
        type: 'essay',
        lessonId: 'cell_biology_revision',
        originalNumber: 21,
        passage: "<p><i>[Figure 5.4 shows a fertilized egg developing into an inner cell mass and then differentiating.]</i></p>",
        prompt: "21. What does it mean for a cell to be totipotent?",
        correctAnswerText: "These cells can grow into any other cell type and even a whole new organism.",
        explanation: "A totipotent stem cell has the ultimate potential to differentiate into absolutely any cell type required to build the entire organism, including both embryonic tissues and extra-embryonic tissues like the placenta."
    },
    {
        type: 'grid-in',
        lessonId: 'cell_biology_revision',
        originalNumber: 22,
        passage: "<p><i>[Figure 5.4 shows a fertilized egg developing into an inner cell mass and then differentiating.]</i></p>",
        prompt: "22. Which of the cell masses shown in the diagram contains cells that are totipotent?",
        correctAnswerText: "The fertilized egg",
        explanation: "The fertilized egg (zygote) is the very first cell formed after fertilization and is the only purely totipotent cell mass shown, as it holds the complete potential to become any cell in the entire organism."
    },
    {
        type: 'essay',
        lessonId: 'cell_biology_revision',
        originalNumber: 23,
        passage: "<p><i>[Figure 5.4 shows a fertilized egg developing into an inner cell mass and then differentiating into muscle cells, neurons, and red blood cells.]</i></p>",
        prompt: "23. List the cells in the diagram that are the most specialized. What type of cell can these specialized cells give rise to?",
        correctAnswerText: "Muscle cells, neurons, and red blood cells. These specialized cells generally do not give rise to any other cell types.",
        explanation: "The cells at the bottom of the flowchart (muscle cells, neurons, red blood cells) are terminally differentiated, meaning they possess highly specialized functions. Because they are fully specialized, they generally cannot divide to form other different cell types."
    },
    {
        type: 'essay',
        lessonId: 'cell_biology_revision',
        originalNumber: 24,
        passage: "<p><i>[Figure 5.4 shows a fertilized egg developing into an inner cell mass and then differentiating.]</i></p>",
        prompt: "24. Assume that all of the cells shown above are from the same organism and have the same genetic information. How do the cells differentiate into cells with different functions?",
        correctAnswerText: "Through the regulation of gene expression (turning specific genes on and off).",
        explanation: "Even though all somatic cells in an organism have the exact same DNA, they differentiate by expressing (turning on) only the specific genes needed for their particular function while silencing (turning off) other genes. This process is influenced by the cell's environment and chemical signaling."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 25,
        passage: "",
        prompt: "25. What does a cell make during the synthesis stage of the cell cycle?",
        options: ["a. more organelles", "b. a copy of DNA", "c. daughter cells", "d. greater surface area"],
        providedAnswer: 1,
        correctAnswer: 1,
        correctAnswerText: "b. a copy of DNA",
        explanation: "The Synthesis (S) phase is specifically dedicated to DNA replication. During this stage, the cell synthesizes a complete, identical copy of its nuclear DNA."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 26,
        passage: "",
        prompt: "26. Before a cell can move from the G_1 or G_2 stage to the next stage of the cell cycle, it must grow and",
        options: ["a. double in size.", "b. duplicate its DNA.", "c. complete interphase.", "d. pass a critical checkpoint."],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d. pass a critical checkpoint.",
        explanation: "The cell cycle is highly regulated by critical checkpoints located at the end of both the G1 and G2 phases. A cell must meet internal and external conditions and 'pass' these checkpoints to ensure it is healthy and ready to proceed."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 27,
        passage: "",
        prompt: "27. The gap 1, gap 2, and synthesis stages of the cell cycle make up",
        options: ["a. interphase.", "b. telophase.", "c. cytokinesis.", "d. mitosis."],
        providedAnswer: 0,
        correctAnswer: 0,
        correctAnswerText: "a. interphase.",
        explanation: "Interphase encompasses the Gap 1 (G1), Synthesis (S), and Gap 2 (G2) phases. It is the longest phase of the cell cycle, during which the cell grows, copies its DNA, and prepares to divide."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 28,
        passage: "",
        prompt: "28. Molecules that control the stages of the cell cycle in all eukaryotes are similar. This fact suggests that",
        options: ["a. binary fission and mitosis are the same.", "b. rates of cell division are uniform.", "c. cells of eukaryotes rarely divide.", "d. eukaryotes share a common ancestry."],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d. eukaryotes share a common ancestry.",
        explanation: "The high degree of evolutionary conservation (similarity) in vital cell cycle regulatory molecules—like cyclins and CDKs—across highly diverse eukaryotic species strongly suggests that these mechanisms were inherited from a shared common ancestor."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 29,
        passage: "<p><i>[Figure 5.1 is a pie chart of the cell cycle showing the following stages: gap 1, synthesis, gap 2, and mitosis.]</i></p>",
        prompt: "29. During which of the following stages shown in Figure 5.1 does cytokinesis take place?",
        options: ["a. gap 1", "b. synthesis", "c. gap 2", "d. mitosis"],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d. mitosis",
        explanation: "Cytokinesis is the division of the cell's cytoplasm and occurs at the very end of the overall mitotic (M) phase, depicted broadly as 'mitosis' in this diagram."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 30,
        passage: "",
        prompt: "30. Which of the following is an example of an internal factor that controls the cell cycle?",
        options: ["a. growth factor", "b. kinase", "c. cell-cell contact", "d. erythropoietin"],
        providedAnswer: 1,
        correctAnswer: 1,
        correctAnswerText: "b. kinase",
        explanation: "Kinases (and cyclins) are proteins that operate entirely inside the cell to chemically regulate cell cycle progression. Growth factors, cell-cell contact, and erythropoietin are all external triggers."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 31,
        passage: "",
        prompt: "31. A hormone present in the blood can stimulate the growth of certain cells. The hormone is acting as a(n)",
        options: ["a. oncogene.", "b. carcinogen.", "c. daughter cell.", "d. external factor"],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d. external factor",
        explanation: "Because hormones are secreted elsewhere in the body and travel through the bloodstream to bind to receptors on the outside of target cells, they originate externally to the receiving cell, making them external factors."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 32,
        passage: "<p><i>[Figure 5.1 is a pie chart of the cell cycle showing the following stages: gap 1, synthesis, gap 2, and mitosis.]</i></p>",
        prompt: "32. “During which of the following stages shown in Figure 5 1 does cytokinesis take place?”",
        options: ["a. gap 1.", "b. synthesis.", "c. gap 2", "d. mitosis."],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d. mitosis.",
        explanation: "Cytokinesis, the physical division of the cytoplasm into two cells, occurs sequentially during the final stages of the mitotic (M) phase."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 33,
        passage: "",
        prompt: "33. “Which of the following is an example of an internal factor that controls the cell cycle?”",
        options: ["a. growth factor.", "b. kinase.", "c. cell contact.", "d. erythropoietin."],
        providedAnswer: 1,
        correctAnswer: 1,
        correctAnswerText: "b. kinase.",
        explanation: "Kinases are internal enzymes that bind to cyclins to form functional regulatory complexes within the cell, pushing the cell cycle forward."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 34,
        passage: "",
        prompt: "34. “A hormone present in the blood can stimulate the growth of certain cells. The hormone is acting as a…”",
        options: ["a. oncogene .", "b. carcinogen.", "c. daughter cell.", "d. external factor."],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d. external factor.",
        explanation: "A hormone acts as a chemical messenger traveling from an external source to bind to a cell's surface receptor, making it a clear example of an external factor."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 35,
        passage: "<p><i>[Figure 5.2 shows a replicated 'X'-shaped chromosome.]</i></p>",
        prompt: "35. \"Which statement is true of the chromosome shown in Figure 5 2?\"",
        options: ["a, Its telomeres have been shortened due to repeated cell division;", "b, Its left and right halves carry identical genetic information;", "c, Its sister chromatids have spindle fibers attached;", "d, Its centromere has been lost during the copying of DNA."],
        providedAnswer: 1,
        correctAnswer: 1,
        correctAnswerText: "b, Its left and right halves carry identical genetic information;",
        explanation: "The X-shaped chromosome depicted consists of two identical sister chromatids. Because they are duplicated copies of a single DNA molecule produced during the Synthesis (S) phase, the left and right halves carry completely identical genetic information."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 36,
        passage: "",
        prompt: "36. \"Multicellular organisms use mitosis for growth, development, and...\"",
        options: ["a, apoptosis;", "b, repair;", "c, reproduction;"],
        providedAnswer: 1,
        correctAnswer: 1,
        correctAnswerText: "b, repair;",
        explanation: "In multicellular organisms, mitosis creates genetically identical cells, allowing the organism to grow, undergo embryonic development, and replace/repair damaged or dead tissues throughout its life."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 37,
        passage: "",
        prompt: "37. \"If a tumor is malignant, then cancer cells from the tumor...\"",
        options: ["a, are harmless;", "b, remain clustered together;", "c, can form more tumors;", "d, create more carcinogens."],
        providedAnswer: 2,
        correctAnswer: 2,
        correctAnswerText: "c, can form more tumors;",
        explanation: "Malignant tumors contain invasive cancer cells that can break loose, spread through the bloodstream (metastasize), and form multiple secondary tumors throughout the body."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 38,
        passage: "",
        prompt: "38 . “What does a cell make during the synthesis stage of the cell cycle?”",
        options: ["a, more organelles.", "b, a copy of DNA.", "c, daughter cells.", "d, greater surface area."],
        providedAnswer: 1,
        correctAnswer: 1,
        correctAnswerText: "b, a copy of DNA.",
        explanation: "The 'Synthesis' (S) stage is uniquely dedicated to DNA replication, producing a complete duplicated copy of the cell's genetic material."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 39,
        passage: "",
        prompt: "39. “Before a cell can move from the G1 or G2 stage to the next stage of the cell cycle, it must grow and…”",
        options: ["a, double in size.", "b, duplicate its DNA.", "c, complete interphase.", "d, pass a critical checkpoint."],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d, pass a critical checkpoint.",
        explanation: "Checkpoints act as crucial regulatory 'stop signs' at the end of both G1 and G2 stages. The cell must assess its health and internal conditions, passing the checkpoint before being allowed to move forward."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 40,
        passage: "",
        prompt: "40. “The gap 1, gap 2, and synthesis stages of the cell cycle make up…”",
        options: ["a, interphase;", "b, telophase;", "c, cytokinesis;", "d, mitosis."],
        providedAnswer: 0,
        correctAnswer: 0,
        correctAnswerText: "a, interphase;",
        explanation: "Interphase is the active growth and preparatory phase of the cell cycle, accounting for the vast majority of a cell's life, comprising G1, S, and G2."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 41,
        passage: "",
        prompt: "41. molecules that control the stages of the cell cycle in all eukaryotes being similar.",
        options: ["a, binary fission and mitosis are the same;", "b, rates of cell division are uniform;", "c, cells of eukaryotes rarely divide; or", "d, eukaryotes share a common ancestry."],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d, eukaryotes share a common ancestry.",
        explanation: "The striking similarity of cell cycle regulatory molecules across widely different eukaryotic groups points toward an evolutionary origin from a shared common ancestor."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 42,
        passage: "",
        prompt: "42. \"One difference between a cancer cell and a normal cell is that...\"",
        options: ["a, cancer cells can divide in the absence of growth factors;", "b, cancer cells continue in the G0 stage indefinitely;", "c, cancer cells cannot copy DNA during the synthesis phase; or", "d, cancer cells are killed by radiation and chemotherapy."],
        providedAnswer: 0,
        correctAnswer: 0,
        correctAnswerText: "a, cancer cells can divide in the absence of growth factors;",
        explanation: "Normal cells generally rely on external chemical signals (growth factors) to prompt division. Cancer cells lose this dependence, bypassing normal regulation to divide uncontrollably even without these external permissions."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 43,
        passage: "",
        prompt: "43 \"Offspring that are genetically unique are the result of...\"",
        options: ["a, mitotic reproduction;", "b, asexual reproduction;", "c, sexual reproduction; or", "d, vegetative reproduction."],
        providedAnswer: 2,
        correctAnswer: 2,
        correctAnswerText: "c, sexual reproduction; or",
        explanation: "Sexual reproduction merges and shuffles genetic material from two distinct parents (via gametes), resulting in offspring that are genetically unique. Asexual methods yield genetically identical clones."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 44,
        passage: "",
        prompt: "44. Which phrase best describes fragmentation?”",
        options: ["a, parent organism produces eggs and sperm, which form a new organism;", "b, parent organism sends off runner that grows into a new organism;", "c, parent organism splits into pieces, which form a new organism; or", "d, parent organism sprouts projection that becomes a new organism."],
        providedAnswer: 2,
        correctAnswer: 2,
        correctAnswerText: "c, parent organism splits into pieces, which form a new organism; or",
        explanation: "Fragmentation is an asexual reproductive process where the parent organism breaks into distinct fragments, and each fragment regenerates into a fully formed, completely new organism."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 45,
        passage: "",
        prompt: "45. \"In vertebrates, differentiation of cells is influenced by...\"",
        options: ["a, whether the cell is apical or basal;", "b, how rapid the first divisions are;", "c, variations in the organism's DNA;", "d, where the cells migrate."],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d, where the cells migrate.",
        explanation: "During embryonic vertebrate development, cells physically migrate. Their final location determines which local chemical signals they are exposed to, and those specific signals dictate how they ultimately differentiate."
    },
    {
        type: 'mcq',
        lessonId: 'cell_biology_revision',
        originalNumber: 46,
        passage: "",
        prompt: "46. “Which of the following reproduce asexually through mitosis?”",
        options: ["a, many multicellular eukaryotes;", "b, most prokaryotes;", "c, only unicellular eukaryotes; or", "d, some multicellular and unicellular eukaryotes."],
        providedAnswer: 3,
        correctAnswer: 3,
        correctAnswerText: "d, some multicellular and unicellular eukaryotes.",
        explanation: "Both unicellular eukaryotes (like amoebas) and some multicellular eukaryotes (like flatworms through fragmentation or hydra through budding) are capable of reproducing asexually utilizing mitosis."
    },
    {
        type: 'essay',
        lessonId: 'cell_biology_revision',
        originalNumber: 47,
        passage: "<p><i>[Figure 5.4 shows a fertilized egg developing into an inner cell mass and then differentiating.]</i></p>",
        prompt: "47. \"What is the source of the cells grown in the Petri dish? Are these cells totipotent or pluripotent?\"",
        correctAnswerText: "The source is the fertilized egg/early embryo. The cells in the dish are pluripotent.",
        explanation: "The cells placed in the Petri dish are extracted from the inner cell mass of the early embryo. These specific stem cells are pluripotent, meaning they can become almost any cell type in the body, but not a whole complete organism."
    },
    {
        type: 'grid-in',
        lessonId: 'cell_biology_revision',
        originalNumber: 48,
        passage: "<p><i>[Figure 5.4 shows stem cell differentiation.]</i></p>",
        prompt: "48. \"Write a title for the diagram shown.\"",
        correctAnswerText: "\"The Process of Stem Cell Differentiation.\"",
        explanation: "The diagram structurally illustrates how a generic, unspecialized cell progresses, divides, and changes shape and function to form fully differentiated, specialized cell types."
    },
    {
        type: 'essay',
        lessonId: 'cell_biology_revision',
        originalNumber: 49,
        passage: "<p><i>[Figure 5.4 shows stem cell differentiation.]</i></p>",
        prompt: "49. \"Define totipotent. Which of the cell masses shown in the diagram contains cells that are totipotent?\"",
        correctAnswerText: "Totipotent: A cell capable of giving rise to any cell type or a complete embryo. The fertilized egg is totipotent.",
        explanation: "Totipotency implies the absolute maximum developmental potential. In mammalian development, only the initial fertilized egg (zygote) and the very first few cleavage cells hold this capacity."
    },
    {
        type: 'essay',
        lessonId: 'cell_biology_revision',
        originalNumber: 50,
        passage: "<p><i>[Figure 5.3 shows diagrams representing stages of mitosis. Stage B shows condensed paired chromosomes. Stage D shows sister chromatids separated into two new forming nuclei.]</i></p>",
        prompt: "50. \"What is the term used to name the stage shown in part B of the diagram? In part D? Describe the events that take place during these stages.\"",
        correctAnswerText: "Part B is Prophase (DNA condenses, nuclear envelope breaks down). Part D is Telophase (nuclear membranes reform, chromosomes uncoil).",
        explanation: "This question refers back to the mitotic diagram (Figure 5.3). Stage B illustrates Prophase, where loosely packed chromatin tightly condenses into visible distinct chromosomes. Stage D illustrates Telophase, where the chromosomes have reached the poles and new nuclear envelopes form to encapsulate them."
    }
];

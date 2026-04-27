/**
 * Quiz Bank Data - Sourced from JAMB, WAEC, and NECO past questions.
 * This file maps lesson titles (from seedCourses.js) to arrays of 20 questions.
 */

const quizData = {
  // ================= MATHEMATICS (SSS) =================
  "SSS1 - Set Theory and Surds": [
    {
      question: "Which symbol represents a null (empty) set?",
      options: ["{∅}", "∅", "{0}", "{ }"],
      correctAnswer: 1
    },
    {
      question: "If set A = {1, 2, 3, 4} and set B = {3, 4, 5, 6}, what is A ∩ B?",
      options: ["{1, 2}", "{3, 4}", "{1, 2, 5, 6}", "{1, 2, 3, 4, 5, 6}"],
      correctAnswer: 1
    },
    {
      question: "Given the universal set U = {1, 2, 3, 4, 5, 6, 7} and A = {2, 4, 6}, find the complement of A (A').",
      options: ["{1, 3, 5, 7}", "{2, 4, 6}", "{1, 2, 3}", "{1, 3, 5}"],
      correctAnswer: 0
    },
    {
      question: "The number of subsets of a set with 3 elements is:",
      options: ["3", "6", "8", "9"],
      correctAnswer: 2
    },
    {
      question: "In a class of 35 students, 19 take History and 12 take Economics. If 5 take both, how many take neither?",
      options: ["9", "10", "15", "26"],
      correctAnswer: 0
    },
    {
      question: "Evaluate √48 - √27 + √12 (Surds).",
      options: ["3√3", "2√3", "√3", "5√3"],
      correctAnswer: 0
    },
    {
      question: "Simplify 2√3 × √6.",
      options: ["6√2", "2√18", "12", "6√3"],
      correctAnswer: 0
    },
    {
      question: "If n(A) = 20, n(B) = 30, and n(A ∪ B) = 40, find n(A ∩ B).",
      options: ["10", "20", "50", "90"],
      correctAnswer: 0
    },
    {
      question: "Rationalize the denominator: 3 / √2.",
      options: ["3√2", "(3√2)/2", "√6", "1.5"],
      correctAnswer: 1
    },
    {
      question: "A book seller sells Mathematics and English books. 30 customers buy Mathematics, 20 buy English, and 10 buy both. How many customers altogether?",
      options: ["30", "40", "50", "60"],
      correctAnswer: 1
    },
    {
      question: "If A = {x : x is a prime factor of 30}, find A.",
      options: ["{2, 3, 5}", "{1, 3, 5}", "{2, 3, 5, 15}", "{3, 5}"],
      correctAnswer: 0
    },
    {
      question: "Two sets are disjoint if:",
      options: ["A ∩ B = ∅", "A ∪ B = ∅", "A ⊂ B", "A = B"],
      correctAnswer: 0
    },
    {
      question: "In a survey, 60% like football and 50% like basketball. If 20% like neither, what % like both?",
      options: ["10%", "20%", "30%", "40%"],
      correctAnswer: 2
    },
    {
      question: "What is the identity element for set union?",
      options: ["Universal Set", "The set itself", "Null Set (∅)", "Subset"],
      correctAnswer: 2
    },
    {
      question: "Simplify (√5 + √2)(√5 - √2).",
      options: ["3", "7", "√3", "5"],
      correctAnswer: 0
    },
    {
      question: "If A = {1, 3, 5} and B = {2, 4, 6}, which statement is true?",
      options: ["A ⊂ B", "A ∩ B = { }", "A ∪ B = {1, 2, 3}", "A = B"],
      correctAnswer: 1
    },
    {
      question: "Given n(U) = 100, n(A) = 40, n(B) = 50, n(A ∩ B) = 10. Find n(A ∪ B)'.",
      options: ["10", "20", "30", "40"],
      correctAnswer: 1
    },
    {
      question: "Express √72 as a simplified surd.",
      options: ["36√2", "2√36", "6√2", "8√9"],
      correctAnswer: 2
    },
    {
      question: "Solve for x: √x = 5.",
      options: ["5", "10", "25", "125"],
      correctAnswer: 2
    },
    {
      question: "Which of the following describes De Morgan's Law?",
      options: ["(A ∪ B)' = A' ∩ B'", "A ∩ B = B ∩ A", "A ∪ A = A", "(A ∩ B) = A ∪ B"],
      correctAnswer: 0
    }
  ],
  "SSS1 - Logarithms and Indices": [
    {
      question: "Evaluate (2^3) × (2^2).",
      options: ["2^6", "2^5", "32", "64"],
      correctAnswer: 1
    },
    {
      question: "Simplify 27^(1/3).",
      options: ["3", "9", "81", "1"],
      correctAnswer: 0
    },
    {
      question: "Evaluate log10(1000).",
      options: ["1", "2", "3", "10"],
      correctAnswer: 2
    },
    {
      question: "Simplify (a^5) / (a^2).",
      options: ["a^7", "a^3", "a^10", "a^-3"],
      correctAnswer: 1
    },
    {
      question: "Evaluate log2(16).",
      options: ["2", "4", "8", "32"],
      correctAnswer: 1
    },
    {
      question: "What is x if 2^x = 32?",
      options: ["4", "5", "6", "16"],
      correctAnswer: 1
    },
    {
      question: "Simplify (x^0) where x is not 0.",
      options: ["0", "x", "1", "-1"],
      correctAnswer: 2
    },
    {
      question: "Evaluate log3(1/9).",
      options: ["2", "-2", "3", "-3"],
      correctAnswer: 1
    },
    {
      question: "Simplify 8^(-2/3).",
      options: ["4", "1/4", "1/2", "2"],
      correctAnswer: 1
    },
    {
      question: "Evaluate log10(0.01).",
      options: ["2", "-2", "-1", "0.1"],
      correctAnswer: 1
    },
    {
      question: "Solve for x: logx(25) = 2.",
      options: ["5", "10", "12.5", "50"],
      correctAnswer: 0
    },
    {
      question: "Simplify log a + log b.",
      options: ["log(a+b)", "log(a-b)", "log(ab)", "log(a/b)"],
      correctAnswer: 2
    },
    {
      question: "Evaluate (1/2)^(-3).",
      options: ["1/8", "8", "-8", "1/6"],
      correctAnswer: 1
    },
    {
      question: "Simplify log a^n.",
      options: ["log n", "n + log a", "n log a", "log(an)"],
      correctAnswer: 2
    },
    {
      question: "Find x: 3^(x+1) = 81.",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1
    },
    {
      question: "Evaluate log5(5).",
      options: ["0", "1", "5", "log 5"],
      correctAnswer: 1
    },
    {
      question: "Simplify (16/81)^(1/4).",
      options: ["2/3", "4/9", "1/2", "3/4"],
      correctAnswer: 0
    },
    {
      question: "Solve log10 x = 4.",
      options: ["40", "400", "1000", "10000"],
      correctAnswer: 3
    },
    {
      question: "Simplify (x^m)^n.",
      options: ["x^(m+n)", "x^(m-n)", "x^(mn)", "x^(m/n)"],
      correctAnswer: 2
    },
    {
      question: "Evaluate log x - log y.",
      options: ["log(x-y)", "log(x+y)", "log(x/y)", "log(xy)"],
      correctAnswer: 2
    }
  ],
  "SSS2 - Coordinate Geometry and Calculus": [
    {
      question: "Find the gradient of the line passing through points (2, 3) and (4, 7).",
      options: ["2", "4", "0.5", "-2"],
      correctAnswer: 0
    },
    {
      question: "What is the distance between points (1, 1) and (4, 5)?",
      options: ["3", "4", "5", "7"],
      correctAnswer: 2
    },
    {
      question: "Find the midpoint of the line segment joining (2, 4) and (6, 8).",
      options: ["(4, 6)", "(3, 5)", "(4, 4)", "(8, 12)"],
      correctAnswer: 0
    },
    {
      question: "Differentiate y = x^3 with respect to x.",
      options: ["3x", "x^2", "3x^2", "3"],
      correctAnswer: 2
    },
    {
      question: "If y = 5x^2, find dy/dx at x = 2.",
      options: ["10", "20", "5", "40"],
      correctAnswer: 1
    },
    {
      question: "Evaluate the integral of 2x dx.",
      options: ["x^2 + C", "2x^2 + C", "x + C", "x^2"],
      correctAnswer: 0
    },
    {
      question: "What is the slope of the line y - 3x = 5?",
      options: ["-3", "3", "5", "1/3"],
      correctAnswer: 1
    },
    {
      question: "Find the derivative of a constant (e.g., y = 7).",
      options: ["7", "1", "0", "x"],
      correctAnswer: 2
    },
    {
      question: "Find the turning point of y = x^2 - 4x + 5.",
      options: ["(2, 1)", "(1, 2)", "(4, 5)", "(0, 5)"],
      correctAnswer: 0
    },
    {
      question: "Integrate x^2 dx.",
      options: ["2x + C", "(x^3)/3 + C", "3x^3 + C", "x^3"],
      correctAnswer: 1
    },
    {
      question: "Which of the following lines is parallel to y = 2x + 1?",
      options: ["y = -2x + 1", "y = 2x - 5", "y = 1/2x", "x + y = 2"],
      correctAnswer: 1
    },
    {
      question: "What is the second derivative of y = x^3?",
      options: ["3x^2", "6x", "6", "x"],
      correctAnswer: 1
    },
    {
      question: "Evaluate ∫(0 to 2) 2x dx.",
      options: ["2", "4", "8", "0"],
      correctAnswer: 1
    },
    {
      question: "If the gradient of a curve is zero, then the point is called a:",
      options: ["Inflection point", "Stationary point", "Origin", "Intercept"],
      correctAnswer: 1
    },
    {
      question: "Find the equation of a line with gradient 2 passing through (0, 0).",
      options: ["y = 2", "x = 2", "y = 2x", "y = x+2"],
      correctAnswer: 2
    },
    {
      question: "The product rule for differentiation (uv)' is:",
      options: ["uv' + vu'", "uv' - vu'", "u/v", "u'v'"],
      correctAnswer: 0
    },
    {
      question: "What is the derivative of sin(x)?",
      options: ["-sin(x)", "cos(x)", "-cos(x)", "tan(x)"],
      correctAnswer: 1
    },
    {
      question: "Find the x-intercept of the line 2x + 3y = 6.",
      options: ["3", "2", "6", "0"],
      correctAnswer: 0
    },
    {
      question: "Evaluate dy/dx for y = 4/x.",
      options: ["4", "-4/x^2", "4x", "-4x"],
      correctAnswer: 1
    },
    {
      question: "Integration is the reverse process of:",
      options: ["Multiplication", "Simplification", "Differentiation", "Geometry"],
      correctAnswer: 2
    }
  ],
  "SSS2 - Trigonometry Mastery": [
    {
      question: "In a right-angled triangle, what is sin θ?",
      options: ["Adj/Hyp", "Opp/Hyp", "Opp/Adj", "Hyp/Opp"],
      correctAnswer: 1
    },
    {
      question: "If tan θ = 3/4, find sin θ.",
      options: ["3/5", "4/5", "5/3", "4/3"],
      correctAnswer: 0
    },
    {
      question: "Evaluate cos 60°.",
      options: ["√3/2", "1/2", "1", "0"],
      correctAnswer: 1
    },
    {
      question: "What is sin²θ + cos²θ?",
      options: ["0", "1", "2", "-1"],
      correctAnswer: 1
    },
    {
      question: "In the Sine Rule, a / sin A equals:",
      options: ["b / cos B", "b / sin B", "Area", "2r"],
      correctAnswer: 1
    },
    {
      question: "Find θ if sin θ = 0.5 (where 0 < θ < 90).",
      options: ["30°", "45°", "60°", "90°"],
      correctAnswer: 0
    },
    {
      question: "The Cosine Rule for side 'a' is a² = :",
      options: ["b² + c² - 2bc cos A", "b² + c² + 2bc cos A", "b² - c²", "1/2 ab sin C"],
      correctAnswer: 0
    },
    {
      question: "What is tan 45°?",
      options: ["0", "0.5", "1", "√3"],
      correctAnswer: 2
    },
    {
      question: "Convert 180° to radians.",
      options: ["π/2", "π", "2π", "3π/2"],
      correctAnswer: 1
    },
    {
      question: "A ladder 10m long leans against a wall making an angle of 60° with the ground. How high is the wall?",
      options: ["5m", "8.66m", "10m", "5√2m"],
      correctAnswer: 1
    },
    {
      question: "The period of the function y = sin x is:",
      options: ["90°", "180°", "360°", "2π"],
      correctAnswer: 2
    },
    {
      question: "Evaluate sin 90°.",
      options: ["0", "0.5", "1", "undefined"],
      correctAnswer: 2
    },
    {
      question: "What is 1 + tan²θ?",
      options: ["sec²θ", "cosec²θ", "cot²θ", "sin²θ"],
      correctAnswer: 0
    },
    {
      question: "In which quadrant is sin θ positive?",
      options: ["1st only", "1st and 2nd", "2nd and 3rd", "3rd and 4th"],
      correctAnswer: 1
    },
    {
      question: "Find the area of a triangle with sides 4cm, 6cm and included angle 30°.",
      options: ["12 cm²", "6 cm²", "24 cm²", "4.8 cm²"],
      correctAnswer: 1
    },
    {
      question: "If θ is an obtuse angle, cos θ is:",
      options: ["Positive", "Negative", "Zero", "One"],
      correctAnswer: 1
    },
    {
      question: "What is the reciprocal of sin θ?",
      options: ["cos θ", "sec θ", "cosec θ", "cot θ"],
      correctAnswer: 2
    },
    {
      question: "Find the value of tan(180 - θ).",
      options: ["tan θ", "-tan θ", "cot θ", "sin θ"],
      correctAnswer: 1
    },
    {
      question: "If cos θ = 0, find θ in the range 0-180.",
      options: ["0°", "90°", "180°", "45°"],
      correctAnswer: 1
    },
    {
      question: "Which ratio is Adj/Opp?",
      options: ["tan θ", "cot θ", "sec θ", "cosec θ"],
      correctAnswer: 1
    }
  ],
  "SSS3 - Matrices and Determinants": [
    {
      question: "A matrix with the same number of rows and columns is a:",
      options: ["Row matrix", "Column matrix", "Square matrix", "Identity matrix"],
      correctAnswer: 2
    },
    {
      question: "Find the determinant of the matrix [[2, 1], [3, 4]].",
      options: ["11", "5", "10", "1"],
      correctAnswer: 1
    },
    {
      question: "If matrix A is [[1, 2], [3, 4]] and B is [[5, 6], [7, 8]], find A+B.",
      options: ["[[6, 8], [10, 12]]", "[[5, 12], [21, 32]]", "[[4, 4], [4, 4]]", "[[1, 1], [1, 1]]"],
      correctAnswer: 0
    },
    {
      question: "The identity matrix for 2x2 is:",
      options: ["[[1, 1], [1, 1]]", "[[0, 0], [0, 0]]", "[[1, 0], [0, 1]]", "[[0, 1], [1, 0]]"],
      correctAnswer: 2
    },
    {
      question: "A matrix whose determinant is zero is called a:",
      options: ["Zero matrix", "Identity matrix", "Singular matrix", "Non-singular matrix"],
      correctAnswer: 2
    },
    {
      question: "Find the transpose of [[1, 2], [3, 4]].",
      options: ["[[3, 4], [1, 2]]", "[[1, 3], [2, 4]]", "[[4, 2], [3, 1]]", "[[2, 1], [4, 3]]"],
      correctAnswer: 1
    },
    {
      question: "If k = 2 and A = [[1, 4], [2, 3]], find kA.",
      options: ["[[2, 8], [4, 6]]", "[[1, 4], [2, 3]]", "[[3, 6], [4, 5]]", "[[2, 4], [8, 6]]"],
      correctAnswer: 0
    },
    {
      question: "Two matrices can be added if they have the same:",
      options: ["Determinant", "Order", "Elements", "Inverse"],
      correctAnswer: 1
    },
    {
      question: "Find the value of x if [[x, 2], [3, 4]] is singular.",
      options: ["1.5", "6", "8", "2/3"],
      correctAnswer: 0
    },
    {
      question: "The inverse of matrix A exists only if:",
      options: ["|A| = 0", "|A| ≠ 0", "A is square", "A is identity"],
      correctAnswer: 1
    },
    {
      question: "Calculate [[1, 0], [0, 1]] * [[5, 2], [1, 3]].",
      options: ["[[1, 0], [0, 1]]", "[[5, 2], [1, 3]]", "[[6, 2], [1, 4]]", "[[0, 0], [0, 0]]"],
      correctAnswer: 1
    },
    {
      question: "The trace of a matrix is the sum of its:",
      options: ["Rows", "Columns", "Main diagonal elements", "All elements"],
      correctAnswer: 2
    },
    {
      question: "What is the order of matrix [[1, 2, 3], [4, 5, 6]]?",
      options: ["2x3", "3x2", "6x1", "1x6"],
      correctAnswer: 0
    },
    {
      question: "A diagonal matrix whose diagonal elements are all equal is a:",
      options: ["Unit matrix", "Scalar matrix", "Null matrix", "Vector"],
      correctAnswer: 1
    },
    {
      question: "Find A^-1 for A = [[a, b], [c, d]]. The multiplier is:",
      options: ["1/(ad-bc)", "ad-bc", "1/(ab-cd)", "1"],
      correctAnswer: 0
    },
    {
      question: "If A is a 2x3 matrix and B is 3x4, the product AB is of order:",
      options: ["2x4", "3x3", "4x2", "Impossible"],
      correctAnswer: 0
    },
    {
      question: "Subtract [[5, 2], [3, 1]] - [[1, 1], [1, 1]].",
      options: ["[[4, 1], [2, 0]]", "[[6, 3], [4, 2]]", "[[4, 1], [1, 0]]", "[[5, 1], [2, 0]]"],
      correctAnswer: 0
    },
    {
      question: "The minor of an element is the determinant of the matrix formed by:",
      options: ["Deleting its row and column", "Adding its row and column", "Itself", "Its diagonal"],
      correctAnswer: 0
    },
    {
      question: "Cramer's rule is used for:",
      options: ["Adding matrices", "Finding Inverse", "Solving Linear Equations", "Transposing"],
      correctAnswer: 2
    },
    {
      question: "Compute the determinant of [[3, 0], [0, 2]].",
      options: ["5", "6", "1", "0"],
      correctAnswer: 1
    }
  ],
  "SSS3 - WAEC Past Question Walkthroughs": [
    {
      question: "WAEC 2023: If log 2 = 0.301, find log 20.",
      options: ["1.301", "2.301", "0.602", "1.602"],
      correctAnswer: 0
    },
    {
      question: "WAEC 2022: Find the sum of interior angles of a hexagon.",
      options: ["360°", "540°", "720°", "1080°"],
      correctAnswer: 2
    },
    {
      question: "WAEC 2021: Solve for x: 3(x + 2) = 15.",
      options: ["1", "3", "5", "7"],
      correctAnswer: 1
    },
    {
      question: "WAEC 2023: Calculate the volume of a sphere of radius 3cm.",
      options: ["12π", "36π", "113.1π", "27π"],
      correctAnswer: 1
    },
    {
      question: "WAEC 2022: If n(A)=10, n(B)=5, A∩B=∅, find n(A∪B).",
      options: ["5", "10", "15", "50"],
      correctAnswer: 2
    },
    {
      question: "WAEC 2021: Find the mean of 2, 4, 6, 8, 10.",
      options: ["5", "6", "7", "8"],
      correctAnswer: 1
    },
    {
      question: "WAEC 2023: Factorize x² - 9.",
      options: ["(x-3)²", "(x-9)(x+1)", "(x-3)(x+3)", "x(x-9)"],
      correctAnswer: 2
    },
    {
      question: "WAEC 2022: What is the probability of picking a queen from a deck?",
      options: ["1/13", "1/52", "4/13", "1/4"],
      correctAnswer: 0
    },
    {
      question: "WAEC 2021: Solve x/2 + 5 = 8.",
      options: ["2", "4", "6", "16"],
      correctAnswer: 2
    },
    {
      question: "WAEC 2023: In a Δ, angles are x, 2x, and 30°. Find x.",
      options: ["30°", "50°", "60°", "150°"],
      correctAnswer: 1
    },
    {
      question: "WAEC 2022: Find the surface area of a cube of side 2cm.",
      options: ["4 cm²", "8 cm²", "16 cm²", "24 cm²"],
      correctAnswer: 3
    },
    {
      question: "WAEC 2021: Ratio of heights of 2 boys is 3:4. If the shorter is 120cm, find the taller.",
      options: ["140 cm", "150 cm", "160 cm", "180 cm"],
      correctAnswer: 2
    },
    {
      question: "WAEC 2023: Slope of line passing through (0,0) and (1,2).",
      options: ["1", "2", "0.5", "0"],
      correctAnswer: 1
    },
    {
      question: "WAEC 2022: Simple Interest on #1000 at 5% for 2 yrs.",
      options: ["#50", "#100", "#150", "#200"],
      correctAnswer: 1
    },
    {
      question: "WAEC 2021: Simplify (3/4) ÷ (1/2).",
      options: ["3/8", "3/2", "2/3", "4/3"],
      correctAnswer: 1
    },
    {
      question: "WAEC 2023: Which is a prime number?",
      options: ["1", "4", "9", "13"],
      correctAnswer: 3
    },
    {
      question: "WAEC 2022: Express 0.0034 in standard form.",
      options: ["3.4 x 10^-3", "34 x 10^-4", "0.34 x 10^-2", "3.4 x 10^3"],
      correctAnswer: 0
    },
    {
      question: "WAEC 2021: Value of π correct to 2 decimal places.",
      options: ["3.12", "3.14", "3.15", "3.16"],
      correctAnswer: 1
    },
    {
      question: "WAEC 2023: Solve 2x - 5 = x + 2.",
      options: ["3", "5", "7", "9"],
      correctAnswer: 2
    },
    {
      question: "WAEC 2022: Area of a circle of diameter 14cm (π=22/7).",
      options: ["44 cm²", "88 cm²", "154 cm²", "616 cm²"],
      correctAnswer: 2
    }
  ],
  // ================= PHYSICS (SSS) =================
  "SSS1 - Introduction to Physics and Measurement": [
    {
      question: "The fundamental unit of mass in SI system is:",
      options: ["Gram", "Kilogram", "Newton", "Slug"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is a derived unit?",
      options: ["Meter", "Second", "Watt", "Kelvin"],
      correctAnswer: 2
    },
    {
      question: "The dimension of speed is:",
      options: ["LT^-1", "LT^-2", "L^2T^-1", "M^0L^1T^-1"],
      correctAnswer: 0
    },
    {
      question: "An instrument for measuring diameter of a thin wire is:",
      options: ["Meter rule", "Vernier caliper", "Micrometer screw gauge", "Tape"],
      correctAnswer: 2
    },
    {
      question: "The degree of exactness of a measurement is called:",
      options: ["Accuracy", "Precision", "Error", "Standard"],
      correctAnswer: 1
    },
    {
      question: "Which is a scalar quantity?",
      options: ["Force", "Velocity", "Temperature", "Acceleration"],
      correctAnswer: 2
    },
    {
      question: "What is the SI unit of luminous intensity?",
      options: ["Mole", "Candela", "Ampere", "Lux"],
      correctAnswer: 1
    },
    {
      question: "1 micrometer is equal to:",
      options: ["10^-3 m", "10^-6 m", "10^-9 m", "10^-12 m"],
      correctAnswer: 1
    },
    {
      question: "Dimensional formula for Force is:",
      options: ["MLT^-1", "MLT^-2", "ML^2T^-2", "M^1L^1T^-2"],
      correctAnswer: 1
    },
    {
      question: "The most precise instrument among these is:",
      options: ["Metre rule", "Vernier calipers", "Micrometer screw gauge", "Measuring tape"],
      correctAnswer: 2
    },
    {
      question: "Prefix 'nano' represents:",
      options: ["10^-9", "10^-6", "10^-12", "10^9"],
      correctAnswer: 0
    },
    {
      question: "Which of these is NOT a fundamental quantity?",
      options: ["Length", "Time", "Speed", "Thermodynamic temperature"],
      correctAnswer: 2
    },
    {
      question: "The zero error of a micrometer is corrected by:",
      options: ["Adding/Subtracting from reading", "Ignoring it", "Replacing tool", "Estimating"],
      correctAnswer: 0
    },
    {
      question: "Volume of a cylinder formula is:",
      options: ["πr²h", "2πrh", "4/3 πr³", "L x W x H"],
      correctAnswer: 0
    },
    {
      question: "The density of water is approximately:",
      options: ["1 kg/m³", "100 kg/m³", "1000 kg/m³", "10000 kg/m³"],
      correctAnswer: 2
    },
    {
      question: "Measurement of a period of a pendulum requires:",
      options: ["Ruler", "Balance", "Stopwatch", "Thermometer"],
      correctAnswer: 2
    },
    {
      question: "Dimension of work is same as:",
      options: ["Power", "Force", "Energy", "Momentum"],
      correctAnswer: 2
    },
    {
      question: "Physics is the study of:",
      options: ["Plants", "Matter and Energy", "Chemical reactions", "Fossils"],
      correctAnswer: 1
    },
    {
      question: "Significant figures in 0.0045 are:",
      options: ["5", "3", "2", "4"],
      correctAnswer: 2
    },
    {
      question: "Scientific notation for 250,000 is:",
      options: ["2.5 x 10^5", "25 x 10^4", "2.5 x 10^-5", "0.25 x 10^6"],
      correctAnswer: 0
    }
  ],
  "SSS1 - Motion and Mechanics": [
    {
      question: "Velocity is defined as the rate of change of:",
      options: ["Distance", "Displacement", "Acceleration", "Mass"],
      correctAnswer: 1
    },
    {
      question: "An object moving in a circle at constant speed has:",
      options: ["Constant velocity", "Constant acceleration", "Changing velocity", "Zero acceleration"],
      correctAnswer: 2
    },
    {
      question: "S = ut + 1/2 at² is the equation for:",
      options: ["Velocity", "Distance", "Time", "Work"],
      correctAnswer: 1
    },
    {
      question: "The area under a velocity-time graph represents:",
      options: ["Acceleration", "Distance", "Force", "Power"],
      correctAnswer: 1
    },
    {
      question: "Newton's First Law is also known as the Law of:",
      options: ["Gravity", "Inertia", "Action-Reaction", "Energy"],
      correctAnswer: 1
    },
    {
      question: "Force = Mass x Acceleration is Newton's:",
      options: ["1st Law", "2nd Law", "3rd Law", "Universal Law"],
      correctAnswer: 1
    },
    {
      question: "If a car travels 100m in 5 seconds, its speed is:",
      options: ["5 m/s", "20 m/s", "500 m/s", "10 m/s"],
      correctAnswer: 1
    },
    {
      question: "A scalar quantity among these is:",
      options: ["Displacement", "Weight", "Work", "Impulse"],
      correctAnswer: 2
    },
    {
      question: "Acceleration due to gravity on Earth is approximately:",
      options: ["9.8 m/s²", "1.6 m/s²", "100 m/s²", "0 m/s²"],
      correctAnswer: 0
    },
    {
      question: "Which of these is a unit of Force?",
      options: ["Joule", "Watt", "Newton", "Pascal"],
      correctAnswer: 2
    },
    {
      question: "Momentum formula is:",
      options: ["m + v", "m/v", "mv", "1/2 mv²"],
      correctAnswer: 2
    },
    {
      question: "Friction always acts in the ________ direction to motion.",
      options: ["Same", "Opposite", "Perpendicular", "Random"],
      correctAnswer: 1
    },
    {
      question: "Weight of an object is measured in:",
      options: ["Kilograms", "Newtons", "Pounds", "Liters"],
      correctAnswer: 1
    },
    {
      question: "Impulse is equal to change in:",
      options: ["Force", "Velocity", "Momentum", "Energy"],
      correctAnswer: 2
    },
    {
      question: "The slope of a distance-time graph represents:",
      options: ["Speed", "Acceleration", "Force", "Time"],
      correctAnswer: 0
    },
    {
      question: "The friction between two surfaces at rest is:",
      options: ["Dynamic friction", "Static friction", "Rolling friction", "Fluid friction"],
      correctAnswer: 1
    },
    {
      question: "Kinetic energy formula is:",
      options: ["mgh", "mv", "1/2 mv²", "F x d"],
      correctAnswer: 2
    },
    {
      question: "Potential energy formula is:",
      options: ["mgh", "1/2 mv²", "1/2 kx²", "P x t"],
      correctAnswer: 0
    },
    {
      question: "Efficiency of a machine is always:",
      options: ["100%", "> 100%", "< 100%", "Infinite"],
      correctAnswer: 2
    },
    {
      question: "An object thrown upward has what velocity at its peak?",
      options: ["Maximum", "Negative", "Zero", "9.8 m/s"],
      correctAnswer: 2
    }
  ],
  "SSS1 - Atoms, Molecules, and Chemical Bonding": [
    {
      question: "Which subatomic particle has a positive charge?",
      options: ["Electron", "Proton", "Neutron", "Positron"],
      correctAnswer: 1
    },
    {
      question: "The atomic number of an element is the number of:",
      options: ["Protons", "Neutrons", "Protons + Neutrons", "Electrons in outer shell"],
      correctAnswer: 0
    },
    {
      question: "Which of these is a noble gas?",
      options: ["Oxygen", "Chlorine", "Argon", "Nitrogen"],
      correctAnswer: 2
    },
    {
      question: "The bond formed by the transfer of electrons is:",
      options: ["Covalent", "Ionic (Electrovalent)", "Metallic", "Dative"],
      correctAnswer: 1
    },
    {
      question: "Isotopes are atoms of the same element with different number of:",
      options: ["Protons", "Neutrons", "Electrons", "Valency"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is a molecule of an element?",
      options: ["H2O", "CO2", "O2", "HCl"],
      correctAnswer: 2
    },
    {
      question: "What is the mass number of an atom with 6 protons and 8 neutrons?",
      options: ["6", "8", "14", "2"],
      correctAnswer: 2
    },
    {
      question: "The sharing of a pair of electrons between two atoms forms a:",
      options: ["Single covalent bond", "Double covalent bond", "Ionic bond", "Hydrogen bond"],
      correctAnswer: 0
    },
    {
      question: "Valency of Carbon is:",
      options: ["2", "4", "6", "8"],
      correctAnswer: 1
    },
    {
      question: "JAMB 2022: Which of these is a polar molecule?",
      options: ["CH4", "CO2", "H2O", "N2"],
      correctAnswer: 2
    },
    {
      question: "Dalton's atomic theory states that atoms are:",
      options: ["Divisible", "Indestructible", "Liquid", "Charged"],
      correctAnswer: 1
    },
    {
      question: "The formula for Calcium Chloride is:",
      options: ["CaCl", "CaCl2", "Ca2Cl", "CaCl3"],
      correctAnswer: 1
    },
    {
      question: "Electronegativity ________ across a period in the periodic table.",
      options: ["Increases", "Decreases", "Remains constant", "Fluctuates"],
      correctAnswer: 0
    },
    {
      question: "Relative atomic mass is compared to 1/12th of an atom of:",
      options: ["Oxygen-16", "Hydrogen-1", "Carbon-12", "Nitrogen-14"],
      correctAnswer: 2
    },
    {
      question: "A dative bond is also known as:",
      options: ["Coordinate bond", "Metallic bond", "Ionic bond", "Covalent bond"],
      correctAnswer: 0
    },
    {
      question: "Which particle is found in the nucleus?",
      options: ["Electron only", "Proton and Neutron", "Electron and Proton", "Neutron only"],
      correctAnswer: 1
    },
    {
      question: "What is the max number of electrons in the K shell?",
      options: ["2", "8", "18", "32"],
      correctAnswer: 0
    },
    {
      question: "The bond in Sodium Chloride is:",
      options: ["Covalent", "Metallic", "Electrovalent", "Van der Waals"],
      correctAnswer: 2
    },
    {
      question: "Chlorine has isotopes 35 and 37. Its relative atomic mass is 35.5 because:",
      options: ["Cl-35 is more abundant", "Cl-37 is more abundant", "They are equal", "It is an average"],
      correctAnswer: 0
    },
    {
      question: "Which of the following describes a cation?",
      options: ["Positively charged ion", "Negatively charged ion", "Neutral atom", "Isotope"],
      correctAnswer: 0
    }
  ],
  "SSS1 - States of Matter and Gas Laws": [
    {
      question: "Which state of matter has a definite shape and volume?",
      options: ["Solid", "Liquid", "Gas", "Plasma"],
      correctAnswer: 0
    },
    {
      question: "Boyle's Law states that Pressure is inversely proportional to:",
      options: ["Temperature", "Volume", "Mass", "Moles"],
      correctAnswer: 1
    },
    {
      question: "Standard Temperature (STP) in Kelvin is:",
      options: ["0 K", "100 K", "273 K", "373 K"],
      correctAnswer: 2
    },
    {
      question: "Which gas law relates V and T at constant P?",
      options: ["Boyle's Law", "Charles's Law", "Graham's Law", "Avogadro's Law"],
      correctAnswer: 1
    },
    {
      question: "The movement of gas particles from high to low concentration is:",
      options: ["Osmosis", "Diffusion", "Effusion", "Evaporation"],
      correctAnswer: 1
    },
    {
      question: "According to the Kinetic Theory, gas pressure is caused by:",
      options: ["Weight of particles", "Collisions with walls", "Mutual repulsion", "Gravity"],
      correctAnswer: 1
    },
    {
      question: "Formula for the General Gas Law is:",
      options: ["PV = nRT", "P1V1 = P2V2", "V1/T1 = V2/T2", "P1V1/T1 = P2V2/T2"],
      correctAnswer: 3
    },
    {
      question: "Which state of matter is the most compressible?",
      options: ["Solid", "Liquid", "Gas", "Lattice"],
      correctAnswer: 2
    },
    {
      question: "Graham's Law states rate of diffusion is inversely proportional to root of:",
      options: ["Mass", "Density", "Pressure", "Temperature"],
      correctAnswer: 1
    },
    {
      question: "What happens to the volume of a gas if temperature is doubled at constant P?",
      options: ["Halved", "Doubled", "Stays same", "Quadrupled"],
      correctAnswer: 1
    },
    {
      question: "Standard Pressure at STP is:",
      options: ["1 atm / 760 mmHg", "0.5 atm", "10 atm", "100 mmHg"],
      correctAnswer: 0
    },
    {
      question: "The Ideal Gas Equation PV = nRT, R is the:",
      options: ["Radius", "Resistance", "Gas Constant", "Rate"],
      correctAnswer: 2
    },
    {
      question: "Which of these gases diffuses fastest?",
      options: ["Oxygen (32)", "Nitrogen (28)", "Hydrogen (2)", "Chlorine (71)"],
      correctAnswer: 2
    },
    {
      question: "The total pressure of a mixture of gases is the sum of partial pressures. This is:",
      options: ["Dalton's Law", "Henry's Law", "Raoult's Law", "Gay-Lussac's Law"],
      correctAnswer: 0
    },
    {
      question: "Absolute zero temperature is:",
      options: ["0°C", "273°C", "-273°C", "100°C"],
      correctAnswer: 2
    },
    {
      question: "Solid turning directly to gas is:",
      options: ["Melting", "Boiling", "Sublimation", "Condensation"],
      correctAnswer: 2
    },
    {
      question: "What is 25°C in Kelvin?",
      options: ["250 K", "298 K", "300 K", "273 K"],
      correctAnswer: 1
    },
    {
      question: "Kinetic energy of gas molecules is directly proportional to:",
      options: ["Pressure", "Volume", "Absolute Temperature", "Mass"],
      correctAnswer: 2
    },
    {
      question: "An real gas behaves like an ideal gas at:",
      options: ["Low P, High T", "High P, Low T", "Low P, Low T", "High P, High T"],
      correctAnswer: 0
    },
    {
      question: "The boiling point of water is:",
      options: ["0°C", "100°C", "273°C", "373°C"],
      correctAnswer: 1
    }
  ],
  "SSS1 - Classification of Living Things": [
    {
      question: "The scientist credited with the modern system of classification is:",
      options: ["Aristotle", "Darwin", "Linnaeus", "Mendel"],
      correctAnswer: 2
    },
    {
      question: "The highest level of classification is:",
      options: ["Species", "Genus", "Kingdom", "Order"],
      correctAnswer: 2
    },
    {
      question: "Living things are divided into how many kingdoms in the modern system?",
      options: ["2", "3", "5", "10"],
      correctAnswer: 2
    },
    {
      question: "Which kingdom includes organisms like bacteria?",
      options: ["Protista", "Fungi", "Monera (Prokaryotae)", "Plantae"],
      correctAnswer: 2
    },
    {
      question: "Which of these is NOT a characteristic of all living things?",
      options: ["Growth", "Movement", "Photosynthesis", "Respiration"],
      correctAnswer: 2
    },
    {
      question: "The scientific name of a lion, Panthera leo, tells us its:",
      options: ["Genus and Species", "Kingdom and Phylum", "Class and Order", "Family and Genus"],
      correctAnswer: 0
    },
    {
      question: "A group of similar organisms that can interbreed and produce fertile offspring is a:",
      options: ["Genus", "Species", "Population", "Community"],
      correctAnswer: 1
    },
    {
      question: "Which Kingdom contains multicellular, heterotrophic organisms with cell walls made of chitin?",
      options: ["Plantae", "Animalia", "Fungi", "Protista"],
      correctAnswer: 2
    },
    {
      question: "Plants that have seeds but no flowers (naked seeds) are:",
      options: ["Angiosperms", "Gymnosperms", "Pteridophytes", "Bryophytes"],
      correctAnswer: 1
    },
    {
      question: "Vertebrates are animals with:",
      options: ["Hard shells", "Backbones", "Jointed legs", "Wings"],
      correctAnswer: 1
    },
    {
      question: "Which kingdom do Amoeba and Paramecium belong to?",
      options: ["Monera", "Protista", "Fungi", "Animalia"],
      correctAnswer: 1
    },
    {
      question: "Organisms that make their own food are called:",
      options: ["Heterotrophs", "Autotrophs", "Saprophytes", "Parasites"],
      correctAnswer: 1
    },
    {
      question: "Which group of plants lacks true roots, stems, and leaves?",
      options: ["Thallophyta (Algae)", "Bryophyta (Mosses)", "Pteridophyta", "Spermatophyta"],
      correctAnswer: 0
    },
    {
      question: "The correct sequence of classification is:",
      options: ["K-P-C-O-F-G-S", "K-C-P-O-F-G-S", "K-P-C-F-O-S-G", "S-G-F-O-C-P-K"],
      correctAnswer: 0
    },
    {
      question: "Which animal group has moist skin and lives both on land and in water?",
      options: ["Reptiles", "Amphibians", "Fish", "Mammals"],
      correctAnswer: 1
    },
    {
      question: "Insects belong to the Phylum:",
      options: ["Mollusca", "Arthropoda", "Annelida", "Chordata"],
      correctAnswer: 1
    },
    {
      question: "The use of two names (Genus and Species) for an organism is called:",
      options: ["Double naming", "Binomial nomenclature", "Taxonomy", "Dual identity"],
      correctAnswer: 1
    },
    {
      question: "Flowering plants are also known as:",
      options: ["Angiosperms", "Gymnosperms", "Ferns", "Conifers"],
      correctAnswer: 0
    },
    {
      question: "Which mammalian group lays eggs?",
      options: ["Marsupials", "Placentals", "Monotremes", "Primates"],
      correctAnswer: 2
    },
    {
      question: "Viruses are often considered on the borderline of life because they:",
      options: ["Cannot move", "Lack cells", "Need a host to reproduce", "Don't eat"],
      correctAnswer: 2
    }
  ],
  "SSS1 - Cell Property and Functions": [
    {
      question: "The 'powerhouse' of the cell is the:",
      options: ["Ribosome", "Nucleus", "Mitochondrion", "Golgi Body"],
      correctAnswer: 2
    },
    {
      question: "Which organelle is responsible for protein synthesis?",
      options: ["Mitochondria", "Ribosome", "Nucleus", "Vacuole"],
      correctAnswer: 1
    },
    {
      question: "Plant cells have a rigid outer layer called the:",
      options: ["Cell membrane", "Cytoplasm", "Cell wall", "Nuclear envelope"],
      correctAnswer: 2
    },
    {
      question: "The 'brain' or control center of the cell is the:",
      options: ["Ribosome", "Lysosome", "Nucleus", "Mitochondrion"],
      correctAnswer: 2
    },
    {
      question: "Which of these is found in animal cells but NOT usually in plant cells?",
      options: ["Chloroplast", "Cell wall", "Centriole", "Large vacuole"],
      correctAnswer: 2
    },
    {
      question: "The jelly-like substance where organelles are suspended is the:",
      options: ["Organelle", "Cytoplasm", "Nucleoplasma", "Plasma"],
      correctAnswer: 1
    },
    {
      question: "Which organelle contains chlorophyll for photosynthesis?",
      options: ["Mitochondria", "Chloroplast", "Leucoplast", "Chromoplast"],
      correctAnswer: 1
    },
    {
      question: "The movement of water across a semi-permeable membrane is:",
      options: ["Diffusion", "Osmosis", "Active transport", "Phagocytosis"],
      correctAnswer: 1
    },
    {
      question: "Which organelle handles waste and digestion in the cell?",
      options: ["Mitochondria", "Lysosome", "Golgi body", "Endoplasmic reticulum"],
      correctAnswer: 1
    },
    {
      question: "The cell membrane is described as being:",
      options: ["Impermeable", "Fully permeable", "Selectively permeable", "Rigid"],
      correctAnswer: 2
    },
    {
      question: "Which structure regulates movement of materials in/out of the nucleus?",
      options: ["Nucleolus", "Nuclear Membrane", "Chromatin", "Nucleoplasm"],
      correctAnswer: 1
    },
    {
      question: "What is the basic structural and functional unit of life?",
      options: ["Tissue", "Organ", "Cell", "System"],
      correctAnswer: 2
    },
    {
      question: "Cell division that results in two identical daughter cells is:",
      options: ["Meiosis", "Mitosis", "Fertilization", "Budding"],
      correctAnswer: 1
    },
    {
      question: "Ribosomes are often attached to which organelle?",
      options: ["Rough ER", "Smooth ER", "Golgi body", "Nucleus"],
      correctAnswer: 0
    },
    {
      question: "The primary function of the Golgi apparatus is:",
      options: ["Energy production", "Protein synthesis", "Packaging and secretion", "Lipid storage"],
      correctAnswer: 2
    },
    {
      question: "The cell wall of plants is primarily composed of:",
      options: ["Starch", "Glycogen", "Cellulose", "Chitin"],
      correctAnswer: 2
    },
    {
      question: "What happens to a red blood cell in distilled water?",
      options: ["Shrinks", "Stays same", "Bursts (Hemolysis)", "Changes color"],
      correctAnswer: 2
    },
    {
      question: "The diffusion of oxygen into the blood is an example of:",
      options: ["Active transport", "Passive transport", "Osmosis", "Exocytosis"],
      correctAnswer: 1
    },
    {
      question: "Which phase of mitosis involves chromosomes lining up at the center?",
      options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
      correctAnswer: 1
    },
    {
      question: "Chromosomes are made up of protein and:",
      options: ["RNA", "DNA", "ATP", "Chlorophyll"],
      correctAnswer: 1
    }
  ],
  "SSS1 - Test of Orals": [
    {
      question: "Which of the following has the same vowel sound as in 'peak'?",
      options: ["pick", "beet", "pet", "bat"],
      correctAnswer: 1
    },
    {
      question: "Identify the word with the same constant sound as in 'church':",
      options: ["chemist", "character", "march", "machine"],
      correctAnswer: 2
    },
    {
      question: "The word 'know' starts with which sound?",
      options: ["/k/", "/n/", "/w/", "/o/"],
      correctAnswer: 1
    },
    {
      question: "Which word rhymes with 'night'?",
      options: ["eight", "straight", "rite", "knit"],
      correctAnswer: 2
    },
    {
      question: "Choose the word with a silent letter:",
      options: ["lamp", "debt", "best", "drum"],
      correctAnswer: 1
    },
    {
      question: "Identify the word with the same vowel sound as 'cat':",
      options: ["man", "father", "call", "care"],
      correctAnswer: 0
    },
    {
      question: "Which word contains the /f/ sound?",
      options: ["phone", "pawn", "bone", "vone"],
      correctAnswer: 0
    },
    {
      question: "The vowel sound in 'foot' is the same as in:",
      options: ["food", "look", "blood", "flute"],
      correctAnswer: 1
    },
    {
      question: "Which word has the /z/ sound?",
      options: ["bus", "calls", "face", "race"],
      correctAnswer: 1
    },
    {
      question: "Identify the silent letter in 'psalm':",
      options: ["p", "s", "m", "a"],
      correctAnswer: 0
    },
    {
      question: "Which word has the same vowel as 'buy'?",
      options: ["boy", "die", "day", "do"],
      correctAnswer: 1
    },
    {
      question: "Choose the word with a different stress pattern: 'RE-cord' (noun) vs 're-CORD' (verb). How is 'TEACH-er' stressed?",
      options: ["TEACH-er", "teach-ER", "Both", "None"],
      correctAnswer: 0
    },
    {
      question: "Which word has the same consonant sound as in 'thin'?",
      options: ["that", "those", "myth", "there"],
      correctAnswer: 2
    },
    {
      question: "Identify the word with the /ŋ/ sound (like 'sing'):",
      options: ["sin", "sink", "sign", "seen"],
      correctAnswer: 1
    },
    {
      question: "The word 'honest' starts with which sound?",
      options: ["/h/", "/o/", "/a/", "/n/"],
      correctAnswer: 1
    },
    {
      question: "Rhyme with 'bread':",
      options: ["read (present)", "bead", "said", "shade"],
      correctAnswer: 2
    },
    {
      question: "Which word has the sound /dʒ/ (as in 'judge')?",
      options: ["guard", "giant", "gain", "gear"],
      correctAnswer: 1
    },
    {
      question: "Different vowel sound: 'seat', 'key', 'field', 'sit':",
      options: ["seat", "key", "field", "sit"],
      correctAnswer: 3
    },
    {
      question: "Identify the word with a long vowel sound:",
      options: ["ship", "sheep", "shop", "shut"],
      correctAnswer: 1
    },
    {
      question: "Silent 't' occurs in:",
      options: ["listen", "little", "later", "top"],
      correctAnswer: 0
    }
  ],
  "SSS2 - Lexis and Structure": [
    {
      question: "Choose the synonym of 'HAPPY':",
      options: ["Sad", "Joyful", "Angry", "Calm"],
      correctAnswer: 1
    },
    {
      question: "What is the antonym of 'GIANT'?",
      options: ["Huge", "Tiny", "Strong", "Weak"],
      correctAnswer: 1
    },
    {
      question: "Identify the preposition: 'He jumped ____ the fence.'",
      options: ["in", "over", "by", "at"],
      correctAnswer: 1
    },
    {
      question: "Choose the correct verb: 'Neither Joe nor Sam ____ here.'",
      options: ["is", "are", "be", "being"],
      correctAnswer: 0
    },
    {
      question: "Identify the idiom: 'To tell a white lie' means:",
      options: ["To lie about color", "A harmless lie", "A dangerous lie", "A truth"],
      correctAnswer: 1
    },
    {
      question: "Choose the conjunction: 'I like tea ___ I hate coffee.'",
      options: ["and", "but", "so", "or"],
      correctAnswer: 1
    },
    {
      question: "Which of these is an adjective?",
      options: ["Quickly", "Beautiful", "Run", "Happiness"],
      correctAnswer: 1
    },
    {
      question: "Complete: 'If I ____ a bird, I would fly.'",
      options: ["am", "was", "were", "be"],
      correctAnswer: 2
    },
    {
      question: "The word 'UNFORTUNATELY' is an:",
      options: ["Adjective", "Adverb", "Noun", "Verb"],
      correctAnswer: 1
    },
    {
      question: "Choose the correct spelling:",
      options: ["Accomodation", "Accommodation", "Acommodation", "Accomodasion"],
      correctAnswer: 1
    },
    {
      question: "What is the plural of 'CRISIS'?",
      options: ["Crisises", "Crisis", "Crises", "Crisi"],
      correctAnswer: 2
    },
    {
      question: "Complete the idiom: 'A piece of ____' (very easy).",
      options: ["pie", "bread", "cake", "candy"],
      correctAnswer: 2
    },
    {
      question: "Identify the object: 'The cat caught a mouse.'",
      options: ["The cat", "caught", "a mouse", "a"],
      correctAnswer: 2
    },
    {
      question: "Correct the sentence: 'He don't like beans.'",
      options: ["He doesn't like beans.", "He don't likes beans.", "He not like beans.", "No change."],
      correctAnswer: 0
    },
    {
      question: "Choose the most appropriate word: 'The ___ of the school is strict.'",
      options: ["Principle", "Principal", "Prince", "Printing"],
      correctAnswer: 1
    },
    {
      question: "What is a 'PHRASAL VERB'?",
      options: ["A simple verb", "Verb + Preposition/Adverb", "A noun", "An adjective"],
      correctAnswer: 1
    },
    {
      question: "Identify the tense: 'I have been studying for three hours.'",
      options: ["Present Perfect", "Present Continuous", "Present Perfect Continuous", "Past Perfect"],
      correctAnswer: 2
    },
    {
      question: "Choose the correct pronoun: 'Between you and ___.'",
      options: ["I", "me", "my", "mine"],
      correctAnswer: 1
    },
    {
      question: "Suffix for 'HAPPY' to make an abstract noun:",
      options: ["-ful", "-ness", "-ly", "-ment"],
      correctAnswer: 1
    },
    {
      question: "What does 'SITTING ON THE FENCE' mean?",
      options: ["To be careful", "To be undecided", "To be lazy", "To be high up"],
      correctAnswer: 1
    }
  ],
  "SSS2 - Periodic Table and Chemical Properties": [
    {
      question: "Elements in the same group of the periodic table have the same:",
      options: ["Number of electron shells", "Number of valence electrons", "Atomic size", "Electronegativity"],
      correctAnswer: 1
    },
    {
      question: "Which of the following properties decreases across a period from left to right?",
      options: ["Electronegativity", "Ionization energy", "Atomic radius", "Non-metallic character"],
      correctAnswer: 2
    },
    {
      question: "An element with the electronic configuration 1s² 2s² 2p⁶ 3s² 3p⁴ belongs to:",
      options: ["Group 2", "Group 4", "Group 6", "Group 8"],
      correctAnswer: 2
    },
    {
      question: "Which of the following is true about noble gases?",
      options: ["They are highly reactive", "They have complete valence shells", "They exist as diatomic molecules", "They have low ionization energy"],
      correctAnswer: 1
    },
    {
      question: "The diagonal relationship between Lithium and Magnesium is due to their similarity in:",
      options: ["Atomic number", "Number of valence electrons", "Charge density and ionic size", "Mass number"],
      correctAnswer: 2
    },
    {
      question: "Which of these is a characteristic of transition elements?",
      options: ["They form colorless compounds", "They have variable oxidation states", "They have completely filled d-orbitals", "They are all non-metals"],
      correctAnswer: 1
    },
    {
      question: "What is the position of an element with atomic number 20 in the periodic table?",
      options: ["Group 1, Period 4", "Group 2, Period 4", "Group 2, Period 3", "Group 1, Period 3"],
      correctAnswer: 1
    },
    {
      question: "The periodic law states that properties of elements are a periodic function of:",
      options: ["Atomic mass", "Atomic number", "Number of neutrons", "Relative molecular mass"],
      correctAnswer: 1
    },
    {
      question: "Which of the following elements is a halogen?",
      options: ["Neon", "Sodium", "Chlorine", "Magnesium"],
      correctAnswer: 2
    },
    {
      question: "As you move down a group in the periodic table, the atomic radius generally:",
      options: ["Increases", "Decreases", "Remains the same", "First increases then decreases"],
      correctAnswer: 0
    },
    {
      question: "Electronegativity is the ability of an atom to:",
      options: ["Lose electrons", "Attract shared electrons", "Replicate", "Bond with ions"],
      correctAnswer: 1
    },
    {
      question: "Metallic character _________ down a group.",
      options: ["Increases", "Decreases", "Remains constant", "Stops"],
      correctAnswer: 0
    },
    {
      question: "Mendeleev's periodic table was based on:",
      options: ["Atomic Number", "Atomic Mass", "Number of Protons", "Chemical symbols"],
      correctAnswer: 1
    },
    {
      question: "The group 1 elements are also known as:",
      options: ["Alkali metals", "Alkaline earth metals", "Halogens", "Noble gases"],
      correctAnswer: 0
    },
    {
      question: "Second ionization energy is always _______ than the first.",
      options: ["Lower", "Greater", "Equal", "Half"],
      correctAnswer: 1
    },
    {
      question: "Which element has the highest electronegativity?",
      options: ["Cesium", "Fluorine", "Oxygen", "Francium"],
      correctAnswer: 1
    },
    {
      question: "Periods in the periodic table represent the number of:",
      options: ["Valence electrons", "Protons", "Electron shells", "Neutrons"],
      correctAnswer: 2
    },
    {
      question: "Substance with atomic number 17 is:",
      options: ["Metals", "Metalloids", "Non-metals", "Transition metal"],
      correctAnswer: 2
    },
    {
      question: "S-block elements consist of groups:",
      options: ["1 and 2", "3 to 12", "13 to 18", "Lathanides"],
      correctAnswer: 0
    },
    {
      question: "Isoelectronic species have the same number of:",
      options: ["Protons", "Electrons", "Neutrons", "Shells"],
      correctAnswer: 1
    }
  ],
  "SSS2 - Chemical Kinetics and Equilibria": [
    {
      question: "A catalyst speeds up a chemical reaction by:",
      options: ["Increasing concentration", "Lowering activation energy", "Increasing temperature", "Increasing surface area"],
      correctAnswer: 1
    },
    {
      question: "Which of the following does NOT affect the rate of a chemical reaction?",
      options: ["Temperature", "Presence of a catalyst", "Concentration of reactants", "Enthalpy change (ΔH)"],
      correctAnswer: 3
    },
    {
      question: "According to collision theory, for a reaction to occur:",
      options: ["Particles must collide with sufficient energy", "All collisions must result in reaction", "Only temperature matters", "Pressure must be constant"],
      correctAnswer: 0
    },
    {
      question: "In the reaction Rate = k[A]²[B], what is the overall order?",
      options: ["1", "2", "3", "0"],
      correctAnswer: 2
    },
    {
      question: "Increasing temperature increases rate because:",
      options: ["Activation energy decreases", "More molecules have energy ≥ EA", "Molecules become smaller", "Concentration increases"],
      correctAnswer: 1
    },
    {
      question: "For a gaseous reaction, increasing pressure is equivalent to:",
      options: ["Increasing volume", "Decreasing concentration", "Increasing concentration", "Removing catalyst"],
      correctAnswer: 2
    },
    {
      question: "Which reaction would likely be the fastest?",
      options: ["Two solids", "Two gases", "Ions in aqueous solution", "Large molecules"],
      correctAnswer: 2
    },
    {
      question: "The unit for rate constant (k) for a first-order reaction is:",
      options: ["mol dm⁻³ s⁻¹", "s⁻¹", "dm³ mol⁻¹ s⁻¹", "mol⁻¹ dm³ s⁻²"],
      correctAnswer: 1
    },
    {
      question: "What happens to the rate as concentration of reactants decreases over time?",
      options: ["Increases", "Decreases", "Remains constant", "Becomes zero immediately"],
      correctAnswer: 1
    },
    {
      question: "Dynamic equilibrium is reached when:",
      options: ["[Reactants] = [Products]", "Rate forward = Rate reverse", "Reaction stops", "No more products formed"],
      correctAnswer: 1
    },
    {
      question: "Le Chatelier's principle states that if a system at equilibrium is disturbed, it will:",
      options: ["Stop", "Shift to oppose the change", "Produce more heat", "Explode"],
      correctAnswer: 1
    },
    {
      question: "In an exothermic reaction, increasing temperature shifts equilibrium to the:",
      options: ["Right (Products)", "Left (Reactants)", "Doesn't shift", "Center"],
      correctAnswer: 1
    },
    {
      question: "What is the equilibrium constant Kc expression for A + B ⇌ C + D?",
      options: ["[C][D] / [A][B]", "[A][B] / [C][D]", "[C]+[D]", "[A]x[B]"],
      correctAnswer: 0
    },
    {
      question: "Minimum energy required for a successful collision is:",
      options: ["Kinetic energy", "Potential energy", "Activation energy", "Bond energy"],
      correctAnswer: 2
    },
    {
      question: "Reaction rate is defined as change in concentration per unit:",
      options: ["Mass", "Temperature", "Time", "Volume"],
      correctAnswer: 2
    },
    {
      question: "Surface area affects the rate in:",
      options: ["Homogeneous systems", "Heterogeneous systems", "Gaseous systems", "All systems"],
      correctAnswer: 1
    },
    {
      question: "Effect of a catalyst on Kc is:",
      options: ["Increases it", "Decreases it", "No effect", "Depends on reaction"],
      correctAnswer: 2
    },
    {
      question: "Haber process for ammonia production uses which catalyst?",
      options: ["Platinum", "Vanadium oxide", "Iron", "Nickel"],
      correctAnswer: 2
    },
    {
      question: "Reaction order can only be determined by:",
      options: ["Equation coefficients", "Experiment", "Molecular weight", "Color"],
      correctAnswer: 1
    },
    {
      question: "A reaction with Rate = k[A]^0 is:",
      options: ["0 order", "1st order", "2nd order", "Undefined"],
      correctAnswer: 0
    }
  ],
  "SSS2 - Ecology and Ecosystems": [
    {
      question: "The specific role or function of an organism in its habitat is known as:",
      options: ["Habitat", "Niche", "Biome", "Community"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is an abiotic component of an ecosystem?",
      options: ["Bacteria", "Fungi", "Soil pH", "Algae"],
      correctAnswer: 2
    },
    {
      question: "In a food chain, the primary consumers are always:",
      options: ["Carnivores", "Herbivores", "Decomposers", "Omnivores"],
      correctAnswer: 1
    },
    {
      question: "The association between two organisms where one benefits and the other is neither harmed nor helped is:",
      options: ["Mutualism", "Parasitism", "Commensalism", "Predation"],
      correctAnswer: 2
    },
    {
      question: "Which of the following is a result of over-crowding in a population?",
      options: ["Increased food supply", "Increased space", "Increased competition", "Reduced disease"],
      correctAnswer: 2
    },
    {
      question: "Plants that grow in areas with moderate water supply are called:",
      options: ["Hydrophytes", "Xerophytes", "Mesophytes", "Epiphytes"],
      correctAnswer: 2
    },
    {
      question: "Which of the following is a major cause of water pollution?",
      options: ["Reforestation", "Oil spillage", "Proper sewage treatment", "Organic manure"],
      correctAnswer: 1
    },
    {
      question: "The sequence of energy transfer from produces through consumers is a:",
      options: ["Food web", "Food chain", "Pyramid of numbers", "Ecosystem"],
      correctAnswer: 1
    },
    {
      question: "Organisms that feed on dead organic matter are:",
      options: ["Producers", "Saprophytes", "Parasites", "Autotrophs"],
      correctAnswer: 1
    },
    {
      question: "The maximum population size an environment can support is its:",
      options: ["Birth rate", "Carrying capacity", "Density", "Niche"],
      correctAnswer: 1
    },
    {
      question: "Nitrogen-fixing bacteria are found in the root nodules of:",
      options: ["Cereals", "Legumes", "Tubers", "Fruits"],
      correctAnswer: 1
    },
    {
      question: "The transition zone between two different ecosystems is an:",
      options: ["Ecotone", "Ecotype", "Ecosphere", "Eco-niche"],
      correctAnswer: 0
    },
    {
      question: "Primary succession begins in an area with:",
      options: ["Existing soil", "No previous life", "Burnt forest", "Flooded land"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a biotic factor affecting an ecosystem?",
      options: ["Light intensity", "Temperature", "Predation", "Humidity"],
      correctAnswer: 2
    },
    {
      question: "The pyramid of energy is always:",
      options: ["Inverted", "Upright", "Circular", "Irregular"],
      correctAnswer: 1
    },
    {
      question: "Global warming is primarily caused by an increase in:",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
      correctAnswer: 1
    },
    {
      question: "Species that are at risk of extinction are classified as:",
      options: ["Extinct", "Endangered", "Vulnerable", "Threatened"],
      correctAnswer: 1
    },
    {
      question: "A collection of different populations living in the same area is a:",
      options: ["Biosphere", "Community", "Ecosystem", "Biome"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is a density-dependent factor?",
      options: ["Flood", "Fire", "Disease", "Drought"],
      correctAnswer: 2
    },
    {
      question: "The instrument used to measure wind speed is an:",
      options: ["Anemometer", "Hygrometer", "Barometer", "Wind vane"],
      correctAnswer: 0
    }
  ],
  "SSS2 - Plant and Animal Nutrition": [
    {
      question: "The process by which green plants manufacture food is:",
      options: ["Respiration", "Chemosynthesis", "Photosynthesis", "Digestion"],
      correctAnswer: 2
    },
    {
      question: "Which of these is a water-soluble vitamin?",
      options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
      correctAnswer: 1
    },
    {
      question: "A deficiency of iron in the human diet leads to:",
      options: ["Scurvy", "Goitre", "Anaemia", "Rickets"],
      correctAnswer: 2
    },
    {
      question: "Which enzyme is responsible for the digestion of protein in the stomach?",
      options: ["Amylase", "Lipase", "Pepsin", "Trypsin"],
      correctAnswer: 2
    },
    {
      question: "The end products of carbohydrate digestion are:",
      options: ["Amino acids", "Fatty acids", "Glucose", "Glycerol"],
      correctAnswer: 2
    },
    {
      question: "Which of the following is a primary role of the liver in digestion?",
      options: ["Secreting insulin", "Production of bile", "Absorption of water", "Storage of waste"],
      correctAnswer: 1
    },
    {
      question: "An example of a balanced diet should contain:",
      options: ["Carbs only", "All classes of food in right proportion", "Fats and oils only", "Proteins and vitamins only"],
      correctAnswer: 1
    },
    {
      question: "Which nutrient is primarily responsible for tissue repair and growth?",
      options: ["Carbohydrates", "Proteins", "Fats", "Minerals"],
      correctAnswer: 1
    },
    {
      question: "A condition caused by severe protein deficiency in children is:",
      options: ["Kwashiorkor", "Beri-beri", "Pellagra", "Rickets"],
      correctAnswer: 0
    },
    {
      question: "Heterotrophic nutrition in which an organism feeds on dead matter is:",
      options: ["Holozoic", "Saprophytic", "Parasitic", "Symbiotic"],
      correctAnswer: 1
    },
    {
      question: "The part of the digestive system where most absorption occurs is the:",
      options: ["Stomach", "Small Intestine", "Large Intestine", "Oesophagus"],
      correctAnswer: 1
    },
    {
      question: "Which mineral is required for the formation of strong bones and teeth?",
      options: ["Iodine", "Iron", "Calcium", "Sodium"],
      correctAnswer: 2
    },
    {
      question: "The green pigment in plants that traps solar energy is:",
      options: ["Carotene", "Xanthophyll", "Chlorophyll", "Hemoglobin"],
      correctAnswer: 2
    },
    {
      question: "Vitamin A deficiency results in:",
      options: ["Rickets", "Night blindness", "Beri-beri", "Scurvy"],
      correctAnswer: 1
    },
    {
      question: "Enzymes that digest fats and oils are called:",
      options: ["Proteases", "Lipases", "Amylases", "Nucleases"],
      correctAnswer: 1
    },
    {
      question: "The wave-like movement of muscles that pushes food down the gut is:",
      options: ["Circulation", "Peristalsis", "Digestion", "Egestion"],
      correctAnswer: 1
    },
    {
      question: "The substance produced by the liver and stored in the gall bladder is:",
      options: ["Saliva", "Gastric juice", "Bile", "Pancreatic juice"],
      correctAnswer: 2
    },
    {
      question: "Which of these is a micronutrient for plants?",
      options: ["Nitrogen", "Phosphorus", "Zinc", "Potassium"],
      correctAnswer: 2
    },
    {
      question: "Ruminant animals (like cows) digest cellulose with the help of:",
      options: ["Pepsin", "Strong acid", "Bacteria in the rumen", "Only chewing"],
      correctAnswer: 2
    },
    {
      question: "The process of removing undigested food from the body is:",
      options: ["Excretion", "Egestion", "Secretion", "Absorption"],
      correctAnswer: 1
    }
  ],
  "SSS3 - Organic Chemistry: Hydrocarbons": [
    {
      question: "Which of the following is a saturated hydrocarbon?",
      options: ["Ethene", "Ethyne", "Ethane", "Benzene"],
      correctAnswer: 2
    },
    {
      question: "The general formula for alkanes is:",
      options: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnHn"],
      correctAnswer: 1
    },
    {
      question: "Which hydrocarbon is used for welding (oxy-acetylene flame)?",
      options: ["Methane", "Propane", "Ethyne (Acetylene)", "Ethene"],
      correctAnswer: 2
    },
    {
      question: "The process of breaking down large hydrocarbon molecules is called:",
      options: ["Polymerization", "Cracking", "Distillation", "Isomerization"],
      correctAnswer: 1
    },
    {
      question: "Which gas is known as 'marsh gas'?",
      options: ["Methane", "Ethane", "Carbon dioxide", "Helium"],
      correctAnswer: 0
    },
    {
      question: "The functional group of alcohols is:",
      options: ["-CHO", "-COOH", "-OH", "-CO-"],
      correctAnswer: 2
    },
    {
      question: "Alkenes undergo which type of reaction with bromine?",
      options: ["Substitution", "Addition", "Elimination", "Redox"],
      correctAnswer: 1
    },
    {
      question: "What is the name of CH3CH2CH=CH2?",
      options: ["But-1-ene", "But-2-ene", "Propene", "Pentene"],
      correctAnswer: 0
    },
    {
      question: "The catalyst used in the hydrogenation of vegetable oils is:",
      options: ["Iron", "Nickel", "Platinum", "Vanadium"],
      correctAnswer: 1
    },
    {
      question: "Methane reacts with chlorine in the presence of sunlight to form:",
      options: ["Chloromethane", "Methanol", "Ethane", "Carbon"],
      correctAnswer: 0
    },
    {
      question: "Benzene belongs to which class of hydrocarbons?",
      options: ["Aliphatic", "Aromatic", "Alicyclic", "Naphthenic"],
      correctAnswer: 1
    },
    {
      question: "Which of these is NOT an isomer of hexane?",
      options: ["2-methylpentane", "2,2-dimethylbutane", "2-methylbutane", "3-methylpentane"],
      correctAnswer: 2
    },
    {
      question: "Natural gas consists predominantly of:",
      options: ["Methane", "Ethane", "Propane", "Butane"],
      correctAnswer: 0
    },
    {
      question: "The reaction between an acid and an alcohol is called:",
      options: ["Saponification", "Esterification", "Hydration", "Hydrolysis"],
      correctAnswer: 1
    },
    {
      question: "Which of the following describes homologous series?",
      options: ["Different functional groups", "Same general formula", "Vary by CH group", "Different physical properties"],
      correctAnswer: 1
    },
    {
      question: "The main product of incomplete combustion of methane is:",
      options: ["CO2", "CO", "H2O", "C2H4"],
      correctAnswer: 1
    },
    {
      question: "Ethene is primarily obtained from petroleum by:",
      options: ["Fractional distillation", "Cracking", "Polymerization", "Reduction"],
      correctAnswer: 1
    },
    {
      question: "What is the IUPAC name for CH3COOCH3?",
      options: ["Methyl methanoate", "Methyl ethanoate", "Ethyl methanoate", "Acetic acid"],
      correctAnswer: 1
    },
    {
      question: "Which of these will decolorize bromine water?",
      options: ["Methane", "Ethane", "Ethene", "Propane"],
      correctAnswer: 2
    },
    {
      question: "What is the general formula for alkynes?",
      options: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnHn"],
      correctAnswer: 2
    }
  ],
  "SSS3 - Electrolysis and Redox Reactions": [
    {
      question: "Oxidation is defined as the:",
      options: ["Gain of electrons", "Loss of electrons", "Gain of hydrogen", "Loss of oxygen"],
      correctAnswer: 1
    },
    {
      question: "In the reaction Zn + Cu²+ → Zn²+ + Cu, Zn is:",
      options: ["Oxidized", "Reduced", "Catalyst", "Inert"],
      correctAnswer: 0
    },
    {
      question: "The substance being reduced is the:",
      options: ["Reducing agent", "Oxidizing agent", "Anode", "Electrolyte"],
      correctAnswer: 1
    },
    {
      question: "A device that converts chemical energy to electrical energy is a:",
      options: ["Voltameter", "Electrolytic cell", "Galvanic (Voltaic) cell", "Resistor"],
      correctAnswer: 2
    },
    {
      question: "In electrolysis, oxidation occurs at the:",
      options: ["Cathode", "Anode", "Electrolyte", "Salt bridge"],
      correctAnswer: 1
    },
    {
      question: "Faraday's First Law of Electrolysis relates mass to:",
      options: ["Voltage", "Quantity of electricity (Q)", "Temperature", "Pressure"],
      correctAnswer: 1
    },
    {
      question: "The oxidation state of Manganese in KMnO4 is:",
      options: ["+2", "+4", "+6", "+7"],
      correctAnswer: 3
    },
    {
      question: "Which of these is a strong electrolyte?",
      options: ["Pure water", "Ethanol", "Sodium chloride solution", "Sugar solution"],
      correctAnswer: 2
    },
    {
      question: "During the electrolysis of acidified water, oxygen is evolved at the:",
      options: ["Cathode", "Anode", "Salt bridge", "Source"],
      correctAnswer: 1
    },
    {
      question: "A redox reaction involves the transfer of:",
      options: ["Protons", "Neutrons", "Electrons", "Ions"],
      correctAnswer: 2
    },
    {
      question: "What is the oxidation number of Hydrogen in NaH?",
      options: ["+1", "0", "-1", "+2"],
      correctAnswer: 2
    },
    {
      question: "The quantity of electricity (Q) is calculated as:",
      options: ["I x t", "V x R", "m x g", "P x V"],
      correctAnswer: 0
    },
    {
      question: "Which of the following is a powerful reducing agent?",
      options: ["Oxygen", "Chlorine", "Sodium", "Fluorine"],
      correctAnswer: 2
    },
    {
      question: "1 Faraday is equivalent to approximately:",
      options: ["9650 coulombs", "96500 coulombs", "9.65 coulombs", "100 Coulombs"],
      correctAnswer: 1
    },
    {
      question: "Electroplating is done at the:",
      options: ["Anode", "Cathode", "Salt bridge", "External circuit"],
      correctAnswer: 1
    },
    {
      question: "Which of these can be used as an electrolyte?",
      options: ["Molten lead(II) bromide", "Solid copper", "Liquid benzene", "Pure alcohol"],
      correctAnswer: 0
    },
    {
      question: "The sum of oxidation numbers in a neutral molecule is:",
      options: ["+1", "-1", "0", "Infinite"],
      correctAnswer: 2
    },
    {
      question: "Rusting of iron is an example of:",
      options: ["Neutralization", "Sublimation", "Redox reaction", "Precipitation"],
      correctAnswer: 2
    },
    {
      question: "In the Daniell cell, the anode is made of:",
      options: ["Copper", "Zinc", "Carbon", "Platinum"],
      correctAnswer: 1
    },
    {
      question: "Electrolysis is primarily used for:",
      options: ["Extracting reactive metals", "Burning fuels", "Mixing gases", "Freezing water"],
      correctAnswer: 0
    }
  ],
  "SSS3 - Genetics and Evolution": [
    {
      question: "The structure that contains the genetic material in a cell is the:",
      options: ["Ribosome", "Chromosome", "Mitochondrion", "Vacuole"],
      correctAnswer: 1
    },
    {
      question: "The different forms of a gene are called:",
      options: ["Genotypes", "Phenotypes", "Alleles", "Chromatids"],
      correctAnswer: 2
    },
    {
      question: "Who is the 'father of genetics'?",
      options: ["Charles Darwin", "Gregor Mendel", "Lamarck", "Watson"],
      correctAnswer: 1
    },
    {
      question: "A trait that is only expressed when two identical alleles are present is:",
      options: ["Dominant", "Recessive", "Incomplete", "Co-dominant"],
      correctAnswer: 1
    },
    {
      question: "The genetic makeup of an organism is its:",
      options: ["Phenotype", "Genotype", "Karyotype", "Archetype"],
      correctAnswer: 1
    },
    {
      question: "If a homozygous tall plant (TT) is crossed with a short plant (tt), what is the F1 generation?",
      options: ["All tall", "All short", "50% tall, 50% short", "75% tall, 25% short"],
      correctAnswer: 0
    },
    {
      question: "Evolution by natural selection was proposed by:",
      options: ["Gregor Mendel", "Charles Darwin", "Waldeyer", "Lamarck"],
      correctAnswer: 1
    },
    {
      question: "A sudden change in the DNA sequence of an organism is a:",
      options: ["Selection", "Mutation", "Variation", "Adaptation"],
      correctAnswer: 1
    },
    {
      question: "Humans have how many pairs of chromosomes?",
      options: ["23", "46", "22", "44"],
      correctAnswer: 0
    },
    {
      question: "The theory of use and disuse was proposed by:",
      options: ["Darwin", "Lamarck", "Mendel", "Wallace"],
      correctAnswer: 1
    },
    {
      question: "Sex-linked traits (like color blindness) are usually carried on the:",
      options: ["Y chromosome", "X chromosome", "Autosomes", "Mitochondria"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a phenotypic variation in humans?",
      options: ["Blood group", "Skin color", "DNA sequence", "Genotype"],
      correctAnswer: 1
    },
    {
      question: "Variation that shows a range of intermediates (like height) is:",
      options: ["Discontinuous", "Continuous", "Mutation", "Selection"],
      correctAnswer: 1
    },
    {
      question: "The cross between an F1 individual and its recessive parent is a:",
      options: ["Monohybrid cross", "Dihybrid cross", "Test cross", "Back cross"],
      correctAnswer: 2
    },
    {
      question: "Vestigial organs (like the appendix) are evidence for:",
      options: ["Creation", "Genetics", "Evolution", "Ecology"],
      correctAnswer: 2
    },
    {
      question: "The outward physical appearance of an organism is its:",
      options: ["Genotype", "Phenotype", "Morphology", "Variety"],
      correctAnswer: 1
    },
    {
      question: "DNA stands for:",
      options: ["Deoxyribonucleic acid", "Diribonucleic acid", "Dynamic nucleic acid", "None"],
      correctAnswer: 0
    },
    {
      question: "A cross involving two pairs of contrasting traits is a:",
      options: ["Monohybrid cross", "Dihybrid cross", "Trihybrid", "Final"],
      correctAnswer: 1
    },
    {
      question: "The process by which organisms better adapted to their environment survive is:",
      options: ["Natural selection", "Artificial selection", "Genetic drift", "Mutation"],
      correctAnswer: 0
    },
    {
      question: "Identical twins originate from:",
      options: ["Two eggs, two sperm", "One egg, one sperm", "Three eggs", "Division of embryo"],
      correctAnswer: 1
    }
  ],
  "SSS3 - Human Health and Diseases": [
    {
      question: "Which of the following is a non-communicable disease?",
      options: ["Cholera", "Diabetes", "Tuberculosis", "Measles"],
      correctAnswer: 1
    },
    {
      question: "The causative agent of Malaria is:",
      options: ["Anopheles mosquito", "Plasmodium", "Bacteria", "Amoeba"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a viral disease?",
      options: ["Typhoid", "Pneumonia", "COVID-19", "Tetanus"],
      correctAnswer: 2
    },
    {
      question: "The use of chemical substances to cure or control diseases is:",
      options: ["Surgery", "Chemotherapy", "Physiotherapy", "Radiology"],
      correctAnswer: 1
    },
    {
      question: "Which organ is primarily affected by Hepatitis?",
      options: ["Heart", "Lungs", "Liver", "Kidney"],
      correctAnswer: 2
    },
    {
      question: "Antibiotics are used to treat infections caused by:",
      options: ["Viruses", "Bacteria", "Fungi", "Protozoa"],
      correctAnswer: 1
    },
    {
      question: "The body's ability to resist infection is:",
      options: ["Susceptibility", "Immunity", "Infection", "Healing"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is a vector-borne disease?",
      options: ["AIDS", "Filariasis", "Cancer", "Smallpox"],
      correctAnswer: 1
    },
    {
      question: "A deficiency of Vitamin C results in:",
      options: ["Rickets", "Night blindness", "Scurvy", "Beri-beri"],
      correctAnswer: 2
    },
    {
      question: "Passive immunity can be obtained from:",
      options: ["Vaccination", "Infection", "Breast milk", "Antibiotics"],
      correctAnswer: 2
    },
    {
      question: "Which of these is sexually transmitted?",
      options: ["Syphilis", "Malaria", "Cholera", "Polio"],
      correctAnswer: 0
    },
    {
      question: "The global organization responsible for international public health is:",
      options: ["UNESCO", "WHO", "UNICEF", "OPEC"],
      correctAnswer: 1
    },
    {
      question: "Which disease is characterized by uncontrolled cell division?",
      options: ["Stroke", "Heart attack", "Cancer", "Asthma"],
      correctAnswer: 2
    },
    {
      question: "A vaccine works by stimulating the production of:",
      options: ["Antigens", "Antibodies", "Hormones", "Platelets"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is a hygiene-related disease?",
      options: ["Sickle cell", "Cholera", "Hypertension", "Goitre"],
      correctAnswer: 1
    },
    {
      question: "An epidemic that spreads across countries or continents is a:",
      options: ["Outbreak", "Pandemic", "Endemic", "Isolated case"],
      correctAnswer: 1
    },
    {
      question: "What is the primary function of white blood cells?",
      options: ["Transporting oxygen", "Clotting blood", "Fighting infection", "Energy"],
      correctAnswer: 2
    },
    {
      question: "Excessive alcohol consumption primarily damages the:",
      options: ["Brain", "Liver", "Lungs", "Stomach"],
      correctAnswer: 1
    },
    {
      question: "Which of these is caused by a protozoan?",
      options: ["Ringworm", "Amoebic dysentery", "Athletes foot", "Tuberculosis"],
      correctAnswer: 1
    },
    {
      question: "Tetanus is caused by a bacterium found in:",
      options: ["Polluted air", "Contaminated soil", "Dirty water", "Canned food"],
      correctAnswer: 1
    }
  ],
  "SSS3 - Essay and Summary Writing": [
    {
      question: "A piece of writing that argues a point is a/an:",
      options: ["Expository essay", "Narrative essay", "Argumentative essay", "Descriptive essay"],
      correctAnswer: 2
    },
    {
      question: "What is the main purpose of a 'Summary'?",
      options: ["To expand the text", "To condense information", "To add personal opinions", "To correct grammar"],
      correctAnswer: 1
    },
    {
      question: "In a formal letter, which of the following is appropriate?",
      options: ["Yours affectionately", "Yours faithfully", "Dearest friend", "Cheers"],
      correctAnswer: 1
    },
    {
      question: "A narrative essay primarily tells a:",
      options: ["Fact", "Story", "Opinion", "Process"],
      correctAnswer: 1
    },
    {
      question: "Which of these is NOT part of a good paragraph?",
      options: ["Topic sentence", "Supporting details", "Conclusion", "Random sentences"],
      correctAnswer: 3
    },
    {
      question: "The tone of a formal essay should be:",
      options: ["Slang-filled", "Objective and professional", "Emotional", "Rude"],
      correctAnswer: 1
    },
    {
      question: "A summary should include:",
      options: ["All minor details", "Main points only", "The writers autobiography", "Excessive adjectives"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is a transition word?",
      options: ["However", "Blue", "Jump", "Teacher"],
      correctAnswer: 0
    },
    {
      question: "An expository essay's goal is to:",
      options: ["Persuade", "Explain or inform", "Describe a scene", "Tell a joke"],
      correctAnswer: 1
    },
    {
      question: "In letter writing, where is your address written?",
      options: ["Top left", "Top right", "Bottom center", "Back of paper"],
      correctAnswer: 1
    },
    {
      question: "A 'thesis statement' in an essay is:",
      options: ["A greeting", "The main argument", "A summary", "The title"],
      correctAnswer: 1
    },
    {
      question: "Summary writing requires one to be:",
      options: ["Wordy", "Concise", "Repetitive", "Loud"],
      correctAnswer: 1
    },
    {
      question: "Which of these is an example of a creative piece?",
      options: ["Lab report", "Short story", "Legal document", "Manual"],
      correctAnswer: 1
    },
    {
      question: "The 'Introduction' of an essay should:",
      options: ["Contain the summary", "State the topic and hook the reader", "Be 5 pages long", "Only have the title"],
      correctAnswer: 1
    },
    {
      question: "In an argumentative essay, you should:",
      options: ["Only show your side", "Consider counter-arguments", "Avoid facts", "Use name-calling"],
      correctAnswer: 1
    },
    {
      question: "Punctuation is important in writing to:",
      options: ["Make it look pretty", "Help the reader understand", "Confuse people", "Increase word count"],
      correctAnswer: 1
    },
    {
      question: "A descriptive essay uses:",
      options: ["Purely numbers", "Sensory details", "Just dates", "Code"],
      correctAnswer: 1
    },
    {
      question: "The 'Conclusion' should:",
      options: ["Introduce new ideas", "Reinforce main points", "End abruptly", "Ask 10 questions"],
      correctAnswer: 1
    },
    {
      question: "Paraphrasing means:",
      options: ["Copying word for word", "Rewriting in your own words", "Deleting the text", "Ignoring the text"],
      correctAnswer: 1
    },
    {
      question: "In an informal letter, which is common?",
      options: ["Contracted forms (don't)", "Official language", "Strict structure", "No sender address"],
      correctAnswer: 0
    }
  ],
  "SSS1 - Introduction to Economics & Basic Concepts": [
    {
      question: "Economics is defined as the study of how humans deal with:",
      options: ["Money", "Scarcity", "Business", "Government"],
      correctAnswer: 1
    },
    {
      question: "The basic economic problem is:",
      options: ["Lack of money", "Scarcity or Limited Resources", "High prices", "Unemployment"],
      correctAnswer: 1
    },
    {
      question: "Opportunity cost is defined as:",
      options: ["Total price paid", "The next best alternative forgone", "Cost of labor", "Interest rate"],
      correctAnswer: 1
    },
    {
      question: "The three basic economic questions are what to produce, how to produce and:",
      options: ["Where to sell", "For whom to produce", "When to stop", "How to tax"],
      correctAnswer: 1
    },
    {
      question: "Scale of preference is a list of:",
      options: ["Needs in order of importance", "Prices", "Suppliers", "Consumers"],
      correctAnswer: 0
    },
    {
      question: "Wealth of Nations (1776) was written by:",
      options: ["Alfred Marshall", "Lionel Robbins", "Adam Smith", "John Keynes"],
      correctAnswer: 2
    },
    {
      question: "Microeconomics deals with:",
      options: ["National income", "Individual units (consumers/firms)", "Inflation", "International trade"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is NOT a factor of production?",
      options: ["Land", "Labor", "Money", "Entrepreneur"],
      correctAnswer: 2
    },
    {
      question: "The reward for Land is:",
      options: ["Profit", "Wages", "Interest", "Rent"],
      correctAnswer: 3
    },
    {
      question: "Resources are scarce because they are:",
      options: ["Free", "Limited in supply compared to demand", "Useless", "Infinite"],
      correctAnswer: 1
    },
    {
      question: "Positive economics deals with:",
      options: ["What should be", "What is (facts)", "Good outcomes", "Opinions"],
      correctAnswer: 1
    },
    {
      question: "A command economy is primarily controlled by:",
      options: ["Price mechanism", "The State/Government", "Consumers", "Tradition"],
      correctAnswer: 1
    },
    {
      question: "The slope of a production possibility curve (PPC) represents:",
      options: ["Profit", "Opportunity cost", "Interest", "Revenue"],
      correctAnswer: 1
    },
    {
      question: "Which economic concept is illustrated by a PPC?",
      options: ["Inflation", "Scarcity and Choice", "Economic growth only", "Trade balance"],
      correctAnswer: 1
    },
    {
      question: "Utility is the:",
      options: ["Price of a good", "Satisfaction derived from consumption", "Cost of production", "Supply of a good"],
      correctAnswer: 1
    },
    {
      question: "Labor is a factors of production that is:",
      options: ["Fixed", "Mobile and human", "Non-perishable", "An asset only"],
      correctAnswer: 1
    },
    {
      question: "The reward for Capital is:",
      options: ["Rent", "Wages", "Interest", "Profit"],
      correctAnswer: 2
    },
    {
      question: "An entrepreneur is risk-taking and:",
      options: ["Hired by firm", "The owner/coordinator", "A machine", "Unpaid"],
      correctAnswer: 1
    },
    {
      question: "Macroeconomics studies the behavior of:",
      options: ["A single farmer", "The economy as a whole", "The price of bread", "One company"],
      correctAnswer: 1
    },
    {
      question: "Lionel Robbins defined economics as a science which studies human behavior as a relationship between ends and:",
      options: ["Money", "Scarcive means which have alternative uses", "Business", "Wealth"],
      correctAnswer: 1
    }
  ],
  "SSS1 - Tools of Economic Analysis & Theory of Demand/Supply": [
    {
      question: "The market price of a commodity is normally determined by the:",
      options: ["Law of demand", "Law of supply", "Interaction of demand and supply", "Government"],
      correctAnswer: 2
    },
    {
      question: "Which of the following is a determinant of demand?",
      options: ["Technology", "Cost of production", "Consumer's income", "Number of producers"],
      correctAnswer: 2
    },
    {
      question: "The law of demand states that:",
      options: ["Price up, Demand up", "Price down, Demand down", "Price up, Demand down", "No relationship"],
      correctAnswer: 2
    },
    {
      question: "A downward-sloping demand curve indicates:",
      options: ["Inverse relationship", "Direct relationship", "Perfect elasticity", "Perfect inelasticity"],
      correctAnswer: 0
    },
    {
      question: "A shift in the demand curve for a product is caused by:",
      options: ["Price change", "Income change", "Quantity supplied change", "Movement along the curve"],
      correctAnswer: 1
    },
    {
      question: "If rise in price of A leads to increase in demand for B, A and B are:",
      options: ["Complements", "Substitutes", "Inferior", "Joint"],
      correctAnswer: 1
    },
    {
      question: "Demand backed by ability to pay is:",
      options: ["Effective demand", "Derived demand", "Joint demand", "Composite demand"],
      correctAnswer: 0
    },
    {
      question: "The law of supply states that:",
      options: ["Price up, Supply down", "Price down, Supply up", "Price up, Supply up", "No relationship"],
      correctAnswer: 2
    },
    {
      question: "A rightward shift in the supply curve means:",
      options: ["Increase in supply", "Decrease in supply", "Movement along curve", "No change"],
      correctAnswer: 0
    },
    {
      question: "At equilibrium price:",
      options: ["Demand > Supply", "Supply > Demand", "Demand = Supply", "Shortage exists"],
      correctAnswer: 2
    },
    {
      question: "Derived demand example is the demand for:",
      options: ["Food", "Labor", "Luxury cars", "Clothing"],
      correctAnswer: 1
    },
    {
      question: "Price above equilibrium results in a:",
      options: ["Shortage", "Surplus", "Market clearing", "Shift"],
      correctAnswer: 1
    },
    {
      question: "Standard demand/supply graph vertical axis represents:",
      options: ["Quantity", "Price", "Time", "Income"],
      correctAnswer: 1
    },
    {
      question: "In statistics, the 'Range' is the difference between:",
      options: ["Mean and Median", "Highest and Lowest values", "Mode and Mean", "Upper and Lower quartiles"],
      correctAnswer: 1
    },
    {
      question: "The 'Mean' of 2, 4, 6, 8 is:",
      options: ["4", "5", "6", "20"],
      correctAnswer: 1
    },
    {
      question: "A Pie Chart is used to represent data in:",
      options: ["Angles of a circle", "Bars", "Graphs", "Pictograms"],
      correctAnswer: 0
    },
    {
      question: "Total angular sum in a pie chart is:",
      options: ["180°", "270°", "360°", "100°"],
      correctAnswer: 2
    },
    {
      question: "The median of 1, 3, 5, 7, 9 is:",
      options: ["3", "5", "7", "9"],
      correctAnswer: 1
    },
    {
      question: "Which tool is best for showing trends over time?",
      options: ["Pie chart", "Line graph", "Bar chart", "Histogram"],
      correctAnswer: 1
    },
    {
      question: "Frequency of a class in a histogram is represented by its:",
      options: ["Width", "Height (or Area)", "Color", "Position"],
      correctAnswer: 1
    }
  ],
  "SSS2 - Market Structures & National Income": [
    {
      question: "A market with many buyers and many sellers and a homogeneous product is:",
      options: ["Monopoly", "Perfect Competition", "Oligopoly", "Monopolistic Competition"],
      correctAnswer: 1
    },
    {
      question: "A single seller of a product with no close substitutes is a:",
      options: ["Perfect competitor", "Monopolist", "Oligopolist", "Consumer"],
      correctAnswer: 1
    },
    {
      question: "The total value of all final goods and services produced in a country in a year is:",
      options: ["GNP", "GDP", "NNP", "Disposable Income"],
      correctAnswer: 1
    },
    {
      question: "GDP + Net Property Income from Abroad equals:",
      options: ["NNP", "GNP", "Real Income", "Per Capita Income"],
      correctAnswer: 1
    },
    {
      question: "A market with few large sellers is an:",
      options: ["Oligopoly", "Monopoly", "Monopsony", "Duopoly"],
      correctAnswer: 0
    },
    {
      question: "Profit maximization for a firm occurs where:",
      options: ["MR = MC", "AR = AC", "TR > TC", "MR > MC"],
      correctAnswer: 0
    },
    {
      question: "National Income is measured by three methods: Income, Expenditure, and:",
      options: ["Budget method", "Output (Value Added) method", "Taxation method", "Banking method"],
      correctAnswer: 1
    },
    {
      question: "Double counting in national income means:",
      options: ["Counting only final goods", "Counting intermediate goods as well as final goods", "Counting income twice", "Errors in calculation"],
      correctAnswer: 1
    },
    {
      question: "Real Income is nominal income adjusted for:",
      options: ["Taxes", "Inflation (Price changes)", "Population", "Interest"],
      correctAnswer: 1
    },
    {
      question: "Per Capita Income is:",
      options: ["Total Income x Population", "Total Income / Population", "Disposable Income", "Wage per hour"],
      correctAnswer: 1
    },
    {
      question: "An example of a 'Price Taker' is a firm in:",
      options: ["Monopoly", "Perfect Competition", "Oligopoly", "Cartels"],
      correctAnswer: 1
    },
    {
      question: "Monopolistic Competition features many firms selling:",
      options: ["Identical products", "Differentiated products", "No products", "Electricity"],
      correctAnswer: 1
    },
    {
      question: "A 'Price Maker' is a firm in:",
      options: ["Perfect Competition", "Monopoly", "Consumers union", "Stock exchange"],
      correctAnswer: 1
    },
    {
      question: "Wages, Rent, Interest and Profit sum up to:",
      options: ["National Expenditure", "National Income", "Total Costs", "Revenue"],
      correctAnswer: 1
    },
    {
      question: "The 'Invisible Hand' theory is associated with:",
      options: ["Government control", "Market forces / Price mechanism", "Trade unions", "Marxism"],
      correctAnswer: 1
    },
    {
      question: "Circular flow of income shows relationship between Households and:",
      options: ["Government only", "Firms", "Banks", "Foreigners only"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a 'Leakage' from the circular flow?",
      options: ["Investment", "Exports", "Savings", "Consumption"],
      correctAnswer: 2
    },
    {
      question: "Which of these is an 'Injection' into the circular flow?",
      options: ["Taxes", "Imports", "Government Spending", "Savings"],
      correctAnswer: 2
    },
    {
      question: "Transfer payments (e.g. pensions) are:",
      options: ["Included in GDP", "Excluded from National Income", "Included in exports", "Taxes"],
      correctAnswer: 1
    },
    {
      question: "In a monopoly, the AR curve is the same as the:",
      options: ["MC curve", "Demand curve", "Supply curve", "AC curve"],
      correctAnswer: 1
    }
  ],
  "SSS2 - Money, Banking and Inflation": [
    {
      question: "Anything generally accepted as a medium of exchange is:",
      options: ["Gold", "Money", "Barter", "Credit"],
      correctAnswer: 1
    },
    {
      question: "Inflation is defined as a persistent increase in:",
      options: ["Prices", "Wages", "Supply", "Debt"],
      correctAnswer: 0
    },
    {
      question: "The bank that issues legal tender is the:",
      options: ["Commercial bank", "Central bank", "Merchant bank", "World bank"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a function of commercial banks?",
      options: ["Issuing currency", "Lender of last resort", "Accepting deposits", "Formulating monetary policy"],
      correctAnswer: 2
    },
    {
      question: "Demand-pull inflation is caused by:",
      options: ["Increase in production costs", "Excess demand over supply", "Decrease in wages", "Good weather"],
      correctAnswer: 1
    },
    {
      question: "Cost-push inflation is caused by:",
      options: ["Increased demand", "Increased production costs (e.g. wages)", "Excess money supply", "Over-population"],
      correctAnswer: 1
    },
    {
      question: "Barter system is a system of:",
      options: ["Trading money for goods", "Exchanging goods for goods", "Electronic banking", "Gold standard"],
      correctAnswer: 1
    },
    {
      question: "Major problem of Barter is:",
      options: ["Easy to carry", "Double coincidence of wants", "Standardized money", "Stable prices"],
      correctAnswer: 1
    },
    {
      question: "Money performs four functions: Medium of exchange, Measure of value, Store of value and:",
      options: ["Lender of last resort", "Standard for deferred payment", "Fiscal tool", "Legal tender"],
      correctAnswer: 1
    },
    {
      question: "What is 'Liquidity' of an asset?",
      options: ["How wet it is", "Ease of conversion to cash", "The interest it pays", "The size of the bill"],
      correctAnswer: 1
    },
    {
      question: "The value of money ________ during inflation.",
      options: ["Increases", "Decreases", "Stays same", "Doubles"],
      correctAnswer: 1
    },
    {
      question: "Who is hurt most by inflation?",
      options: ["Debtors", "Fixed income earners", "Businessmen", "Farmers"],
      correctAnswer: 1
    },
    {
      question: "The Central Bank control money supply using:",
      options: ["Budgetary policy", "Monetary policy", "Agricultural policy", "Trade policy"],
      correctAnswer: 1
    },
    {
      question: "Open Market Operations (OMO) refers to:",
      options: ["Selling goods in market", "Buying/Selling government securities", "Fixing exchange rates", "Taxation"],
      correctAnswer: 1
    },
    {
      question: "The interest rate Central Bank charges commercial banks is the:",
      options: ["Market rate", "Bank rate (Discount rate)", "Prime rate", "Tax rate"],
      correctAnswer: 1
    },
    {
      question: "A continuous fall in the general price level is:",
      options: ["Inflation", "Deflation", "Stagflation", "Reflation"],
      correctAnswer: 1
    },
    {
      question: "Which of these is 'Near Money'?",
      options: ["Currency notes", "Coins", "Treasury bills/Savings bonds", "Credit cards"],
      correctAnswer: 2
    },
    {
      question: "Inflation caused by too much money chasing too few goods is:",
      options: ["Demand-pull", "Cost-push", "Hyper-inflation", "Imported inflation"],
      correctAnswer: 0
    },
    {
      question: "Legal tender in Nigeria is the:",
      options: ["Dollar", "Naira", "Pound", "Cedi"],
      correctAnswer: 1
    },
    {
      question: "What is 'Narrow Money' (M1)?",
      options: ["Currency + Savings", "Currency + Demand Deposits", "Gold only", "Total bank assets"],
      correctAnswer: 1
    }
  ],
  "SSS3 - International Trade & Balance of Payments": [
    {
      question: "International trade is trade between:",
      options: ["Two regions of a country", "Two or more countries", "Manufacturers and wholesalers", "Rural and urban areas"],
      correctAnswer: 1
    },
    {
      question: "The principle of Comparative Advantage was developed by:",
      options: ["Adam Smith", "David Ricardo", "Karl Marx", "Marshall"],
      correctAnswer: 1
    },
    {
      question: "The record of a country's economic transactions with the rest of the world is:",
      options: ["Budget", "Balance of Payments", "Bank statement", "Trade journal"],
      correctAnswer: 1
    },
    {
      question: "A tax on imported goods is a:",
      options: ["Quota", "Tariff", "Subsidy", "Embargo"],
      correctAnswer: 1
    },
    {
      question: "Balance of Trade deals with:",
      options: ["Visible imports and exports", "Invisible services", "Capital flows", "Tax revenue"],
      correctAnswer: 0
    },
    {
      question: "A 'Favorable' Balance of Trade means:",
      options: ["Imports > Exports", "Exports > Imports", "Exports = Imports", "No imports"],
      correctAnswer: 1
    },
    {
      question: "The use of Quotas in international trade is to:",
      options: ["Increase imports", "Limit the quantity of imports", "Tax exports", "Encourage travel"],
      correctAnswer: 1
    },
    {
      question: "Devaluation of currency is aimed at making exports:",
      options: ["More expensive", "Cheaper", "Useless", "Stop"],
      correctAnswer: 1
    },
    {
      question: "Terms of Trade is the ratio of:",
      options: ["Output to Input", "Export Price Index to Import Price Index", "Exports to GDP", "Tariff to Revenue"],
      correctAnswer: 1
    },
    {
      question: "Members of ECOWAS are countries in:",
      options: ["East Africa", "West Africa", "North Africa", "Central Africa"],
      correctAnswer: 1
    },
    {
      question: "Which organization is responsible for global trade rules?",
      options: ["IMF", "World Bank", "WTO", "OPEC"],
      correctAnswer: 2
    },
    {
      question: "An example of an invisible export is:",
      options: ["Oil", "Cocoa", "Tourism/Shipping services", "Machinery"],
      correctAnswer: 2
    },
    {
      question: "Free Trade Area means:",
      options: ["No trade allowed", "Removal of trade barriers between members", "Global government", "Common currency only"],
      correctAnswer: 1
    },
    {
      question: "Dumping in international trade means:",
      options: ["Selling waste", "Selling goods abroad at lower prices than at home", "High tariffs", "Free gifts"],
      correctAnswer: 1
    },
    {
      question: "The 'Current Account' in BOP includes:",
      options: ["Visible/Invisible trade", "Long term loans", "Direct investment", "Gold reserves"],
      correctAnswer: 0
    },
    {
      question: "Protectionism is the policy of:",
      options: ["Encouraging imports", "Protecting domestic industries from foreign competition", "Free trade", "Colonization"],
      correctAnswer: 1
    },
    {
      question: "Foreign Exchange refers to:",
      options: ["Local money", "Foreign currency used in trade", "Swapping goods", "Interest rates"],
      correctAnswer: 1
    },
    {
      question: "The rate at which one currency is exchanged for another is:",
      options: ["Interest rate", "Exchange rate", "Bank rate", "Inflation rate"],
      correctAnswer: 1
    },
    {
      question: "OPEC is concerned with the production and pricing of:",
      options: ["Agricultural goods", "Crude Oil", "Gold", "Diamond"],
      correctAnswer: 1
    },
    {
      question: "A total ban on the importation of a good is an:",
      options: ["Embargo", "Tariff", "Quota", "Subsidy"],
      correctAnswer: 0
    }
  ],
  "SSS3 - Economic Planning & Petroleum in Nigeria": [
    {
      question: "Nigeria's most important export and source of revenue is:",
      options: ["Cocoa", "Groundnut", "Crude Oil (Petroleum)", "Coal"],
      correctAnswer: 2
    },
    {
      question: "Petroleum was first discovered in commercial quantities in Nigeria at:",
      options: ["Oloibiri", "Warri", "Lagos", "Kano"],
      correctAnswer: 0
    },
    {
      question: "The organization regulating Nigeria's oil industry is:",
      options: ["OPEC", "NNPC", "CBN", "FIRS"],
      correctAnswer: 1
    },
    {
      question: "The primary purpose of economic planning is to:",
      options: ["Increase taxes", "Allocate resources for growth/development", "Stop imports", "Build more banks"],
      correctAnswer: 1
    },
    {
      question: "Nigeria's dependence on a single product (Oil) for revenue is called:",
      options: ["Diversified economy", "Monoproduct economy", "Industrial economy", "Socialist economy"],
      correctAnswer: 1
    },
    {
      question: "Downstream petroleum activities include:",
      options: ["Exploration", "Refining and Marketing", "Drilling", "Seismic survey"],
      correctAnswer: 1
    },
    {
      question: "Development planning usually covers a period of:",
      options: ["1 month", "1 year", "5 to 10 years", "100 years"],
      correctAnswer: 2
    },
    {
      question: "Subsidy removal on petroleum aims to:",
      options: ["Increase debt", "Reduce government spending and encourage efficiency", "Close refineries", "Reduce oil prices"],
      correctAnswer: 1
    },
    {
      question: "Local Content Policy in the oil industry aims to:",
      options: ["Import more labor", "Increase participation of Nigerians and local firms", "Stop oil production", "Lower quality"],
      correctAnswer: 1
    },
    {
      question: "The Niger Delta Development Commission (NDDC) was set up to:",
      options: ["Produce oil", "Develop the oil-producing region", "Tax oil companies", "Build refineries in Abuja"],
      correctAnswer: 1
    },
    {
      question: "Environmental degradation in oil regions is mainly caused by:",
      options: ["Agriculture", "Oil spills and gas flaring", "Tourism", "Fishing"],
      correctAnswer: 1
    },
    {
      question: "Economic development differs from economic growth because it involves:",
      options: ["Only increase in GDP", "Increase in GDP plus qualitative structural changes", "More population", "Less industry"],
      correctAnswer: 1
    },
    {
      question: "Indigenization Policy of 1972 aimed at:",
      options: ["Allowing foreign control", "Transferring ownership of firms to Nigerians", "Replacing Naira", "Selling oil to neighbors"],
      correctAnswer: 1
    },
    {
      question: "Diversification of the Nigerian economy means:",
      options: ["Producing only oil", "Developing multiple sectors (Agri, Solid Minerals, etc.)", "Importing everything", "Devaluation"],
      correctAnswer: 1
    },
    {
      question: "OPEC (Organization of Petroleum Exporting Countries) headquarters is in:",
      options: ["Lagos", "Vienna", "Riyadh", "New York"],
      correctAnswer: 1
    },
    {
      question: "Oil revenue in Nigeria is paid into the:",
      options: ["Federation Account", "Private accounts", "Stock market", "Foreign banks only"],
      correctAnswer: 0
    },
    {
      question: "The process of searching for oil is called:",
      options: ["Refining", "Exploration", "Marketing", "Distribution"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a byproduct of petroleum?",
      options: ["Steel", "Plastic / Petrochemicals", "Gold", "Wood"],
      correctAnswer: 1
    },
    {
      question: "Nigeria is a member of which oil organization?",
      options: ["OPEC", "EU", "NATO", "BRICS"],
      correctAnswer: 0
    },
    {
      question: "Human Capital Development refers to investment in:",
      options: ["Machines", "Education and Health of people", "Roads", "Factories"],
      correctAnswer: 1
    }
  ],
  "SSS1 - Basic Concepts of Government & Political Ideologies": [
    {
      question: "Which system of government allows citizens to elect their leaders?",
      options: ["Monarchy", "Dictatorship", "Democracy", "Theocracy"],
      correctAnswer: 2
    },
    {
      question: "The supreme law of a country is the:",
      options: ["Presidential order", "Constitution", "Court ruling", "Parliamentary debate"],
      correctAnswer: 1
    },
    {
      question: "Who is the head of government in a parliamentary system?",
      options: ["President", "Governor", "Prime Minister", "Chief Justice"],
      correctAnswer: 2
    },
    {
      question: "The right to vote is also known as:",
      options: ["Citizenship", "Franchise (Suffrage)", "Democracy", "Independence"],
      correctAnswer: 1
    },
    {
      question: "A constitution that is not easily amended is:",
      options: ["Flexible", "Written", "Rigid", "Unitary"],
      correctAnswer: 2
    },
    {
      question: "The principle of dividing powers among organs is:",
      options: ["Sovereignty", "Separation of Powers", "Rule of Law", "Checks and Balances"],
      correctAnswer: 1
    },
    {
      question: "The main function of the Legislature is to:",
      options: ["Execute laws", "Interpret laws", "Make laws", "Administer justice"],
      correctAnswer: 2
    },
    {
      question: "Which of the following is NOT a characteristic of a state?",
      options: ["Sovereignty", "Government", "Mass Media", "Territory"],
      correctAnswer: 2
    },
    {
      question: "Rule of Law means:",
      options: ["Government by force", "Supremacy of the law", "Rule of the rich", "Rule of the military"],
      correctAnswer: 1
    },
    {
      question: "Which ideology advocates for communal ownership of property?",
      options: ["Capitalism", "Socialism", "Fascism", "Feudalism"],
      correctAnswer: 1
    },
    {
      question: "The 'Father of Communism' is:",
      options: ["Adam Smith", "Karl Marx", "John Locke", "Plato"],
      correctAnswer: 1
    },
    {
      question: "Authority that is based on the personal qualities of a leader is:",
      options: ["Traditional", "Charismatic", "Legal-rational", "Dictatorial"],
      correctAnswer: 1
    },
    {
      question: "Sovereignty means the:",
      options: ["Freedom to travel", "Supreme power of the state", "Wealth of a nation", "Size of territory"],
      correctAnswer: 1
    },
    {
      question: "The study of government is also known as:",
      options: ["Economics", "Political Science", "Geography", "History"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a function of government?",
      options: ["Maintenance of law and order", "Selling personal goods", "Managing private families", "Starting riots"],
      correctAnswer: 0
    },
    {
      question: "In a monarchy, power is usually:",
      options: ["Elected", "Hereditary", "Bought", "Stolen"],
      correctAnswer: 1
    },
    {
      question: "Totalitarianism is a form of government that:",
      options: ["Limits its own power", "Controls all aspects of life", "Is always temporary", "Doesn't have a leader"],
      correctAnswer: 1
    },
    {
      question: "Communality was a feature of:",
      options: ["Industrial Europe", "Traditional African societies", "Modern USA", "Fascist Italy"],
      correctAnswer: 1
    },
    {
      question: "The legal right to exercise power is:",
      options: ["Force", "Authority", "Influence", "Wealth"],
      correctAnswer: 1
    },
    {
      question: "De-concentration of power is a form of:",
      options: ["Centralization", "Decentralization", "Anarchy", "Dictatorship"],
      correctAnswer: 1
    }
  ],
  "SSS1 - Constitution and Constitutionalism": [
    {
      question: "Constitutionalism means government according to:",
      options: ["The will of the leader", "The provisions of the constitution", "Customs only", "Military decrees"],
      correctAnswer: 1
    },
    {
      question: "Which constitution introduced the elective principle in Nigeria?",
      options: ["Richard's", "Macpherson", "Clifford (1922)", "Lyttleton"],
      correctAnswer: 2
    },
    {
      question: "A written constitution is often contained in:",
      options: ["Many books", "A single document", "Oral history", "News papers"],
      correctAnswer: 1
    },
    {
      question: "The power to amend a rigid constitution often requires:",
      options: ["Simple majority", "Special majority (e.g. 2/3)", "Presidential order only", "Police approval"],
      correctAnswer: 1
    },
    {
      question: "Unitary constitution concentrates power at the:",
      options: ["Local level", "State level", "Central level", "Village level"],
      correctAnswer: 2
    },
    {
      question: "Constitutional development in Nigeria started before:",
      options: ["Independence", "Amalgamation", "1999", "2023"],
      correctAnswer: 0
    },
    {
      question: "Richard's Constitution of 1946 introduced:",
      options: ["Federalism", "Regionalism", "Independence", "Military rule"],
      correctAnswer: 1
    },
    {
      question: "The 1979 Constitution of Nigeria introduced the:",
      options: ["Parliamentary system", "Presidential system", "Monarchy", "Protectorate"],
      correctAnswer: 1
    },
    {
      question: "Constitutionalism limits the powers of:",
      options: ["Citizens only", "Government / Rulers", "Foreginers", "Children"],
      correctAnswer: 1
    },
    {
      question: "Which constitution made Nigeria a Republic?",
      options: ["1960", "1963", "1979", "1999"],
      correctAnswer: 1
    },
    {
      question: "A feature of a flexible constitution is that it:",
      options: ["Is hard to change", "Is easily amended like ordinary law", "Is always oral", "Is only used in wars"],
      correctAnswer: 1
    },
    {
      question: "The preamble of a constitution is the:",
      options: ["Concluding part", "Introductory part", "Middle section", "Appendixt"],
      correctAnswer: 1
    },
    {
      question: "The Lyttleton Constitution of 1954 is significant for establishing:",
      options: ["A Unitary system", "A Federal system for Nigeria", "Southern protectorate", "Direct rule"],
      correctAnswer: 1
    },
    {
      question: "Macpherson Constitution of 1951 was described as:",
      options: ["Unpopular", "Semi-federal and consultative", "Final independence", "Military"],
      correctAnswer: 1
    },
    {
      question: "A confederal constitution gives more power to:",
      options: ["Central government", "Component units (States)", "The Military", "International bodies"],
      correctAnswer: 1
    },
    {
      question: "The 'Rule of Law' and 'Fundamental Human Rights' are usually contained in:",
      options: ["News papers", "The Constitution", "Trade journals", "Biology books"],
      correctAnswer: 1
    },
    {
      question: "Unwritten constitutions are mostly based on:",
      options: ["Logic", "Customs, conventions and precedents", "Scientific facts", "One man's ideas"],
      correctAnswer: 1
    },
    {
      question: "Amendment of unwritten constitution is:",
      options: ["Impossible", "Very easy", "Very difficult", "Slow"],
      correctAnswer: 1
    },
    {
      question: "Separation of powers is mostly practiced in a:",
      options: ["Monarchy", "Presidential system", "Unitary system", "Anarchy"],
      correctAnswer: 1
    },
    {
      question: "Nigeria's current constitution is the:",
      options: ["1960 Constitution", "1979 Constitution", "1999 Constitution (as amended)", "2020 Constitution"],
      correctAnswer: 2
    }
  ],
  "SSS2 - Organs of Government & Civil Service": [
    {
      question: "The organ of government responsible for law interpretation is:",
      options: ["Executive", "Legislature", "Judiciary", "Police"],
      correctAnswer: 2
    },
    {
      question: "The main function of the Executive is to:",
      options: ["Make laws", "Implement (Execute) laws", "Interpret laws", "Amending the constitution"],
      correctAnswer: 1
    },
    {
      question: "A bicameral legislature has how many houses?",
      options: ["One", "Two", "Three", "Four"],
      correctAnswer: 1
    },
    {
      question: "The primary function of the civil service is to:",
      options: ["Win elections", "Implement government policies", "Pass bills", "Judge criminals"],
      correctAnswer: 1
    },
    {
      question: "The political head of a ministry is the:",
      options: ["Director-General", "Permanent Secretary", "Minister / Commissioner", "HOD"],
      correctAnswer: 2
    },
    {
      question: "The administrative head (career civil servant) of a ministry is the:",
      options: ["Minister", "Permanent Secretary", "Clerk", "Secretary"],
      correctAnswer: 1
    },
    {
      question: "Which house in Nigeria's legislature is the 'Upper House'?",
      options: ["House of Representatives", "The Senate", "State Assembly", "Local council"],
      correctAnswer: 1
    },
    {
      question: "Independence of the Judiciary means that judges should be:",
      options: ["Free from political interference", "Above the law", "Unpaid", "Appointed by kings only"],
      correctAnswer: 0
    },
    {
      question: "A system where one organ acts as a watch over others is:",
      options: ["Centralization", "Separation of powers", "Checks and Balances", "Monarchy"],
      correctAnswer: 2
    },
    {
      question: "Members of the civil service are expected to be politically:",
      options: ["Partial", "Neutral", "Active", "Aggressive"],
      correctAnswer: 1
    },
    {
      question: "The principle which protects civil servants from being blamed publicly is:",
      options: ["Anonymity", "Neutrality", "Permanence", "Merit"],
      correctAnswer: 0
    },
    {
      question: "Legislature with only one house is:",
      options: ["Bicameral", "Unicameral", "Tricameral", "Monocameral"],
      correctAnswer: 1
    },
    {
      question: "The 'Power of the Purse' (controlling budget) belongs to:",
      options: ["Judiciary", "Executive", "Legislature", "Central Bank"],
      correctAnswer: 2
    },
    {
      question: "Judicial Review is the power of the courts to:",
      options: ["Declare laws unconstitutional", "Write new laws", "Pardon criminals", "Tax citizens"],
      correctAnswer: 0
    },
    {
      question: "Civil service permanence means that they:",
      options: ["Sleep in the office", "Stay in office despite changes in government", "Never go on leave", "Are immortal"],
      correctAnswer: 1
    },
    {
      question: "The body responsible for recruiting civil servants is the:",
      options: ["Police", "Civil Service Commission", "Political Party", "Ministry of Justice"],
      correctAnswer: 1
    },
    {
      question: "Red-tapism in civil service refers to:",
      options: ["Fast services", "Bureaucratic delays and excessive protocols", "Decorating offices", "Safety measures"],
      correctAnswer: 1
    },
    {
      question: "The highest court in Nigeria is the:",
      options: ["High Court", "Court of Appeal", "Supreme Court", "Sharia Court"],
      correctAnswer: 2
    },
    {
      question: "Public Corporations (e.g. NNPC) are set up to:",
      options: ["Win elections", "Provide essential services and goods", "Make laws", "Judge people"],
      correctAnswer: 1
    },
    {
      question: "The Ombudsman (Public Complaints Commission) investigates:",
      options: ["Robbery", "Administrative injustice and abuse of power", "Elections", "Tax rates"],
      correctAnswer: 1
    }
  ],
  "SSS2 - Pre-colonial Political Systems in Nigeria": [
    {
      question: "A centralized political system existed in which Igbo pre-colonial society?",
      options: ["None (they were acephalous)", "Onitsha / Nri", "Ohafia", "Aro"],
      correctAnswer: 1
    },
    {
      question: "The head of the Old Oyo Empire was the:",
      options: ["Emir", "Obi", "Alaafin", "Oba"],
      correctAnswer: 2
    },
    {
      question: "The council of seven kingmakers in Old Oyo was the:",
      options: ["Oyomesi", "Ogboni", "Are-Ona-Kakanfo", "Eware"],
      correctAnswer: 0
    },
    {
      question: "In the pre-colonial Hausa/Fulani system, the head was the:",
      options: ["Oba", "Emir", "Sultan", "Galadima"],
      correctAnswer: 1
    },
    {
      question: "The judicial and theological advisor in the Emirate system was the:",
      options: ["Waziri", "Alkila / Alkali", "Madawaki", "Sarkin Fada"],
      correctAnswer: 1
    },
    {
      question: "Igbo traditional societies were mostly described as:",
      options: ["Monarchies", "Acephalous (Segmentary) communities", "Emirates", "Dictatorships"],
      correctAnswer: 1
    },
    {
      question: "The age-grade system in Igbo society performed _________ functions.",
      options: ["Only religious", "Executive and security", "No", "Trading"],
      correctAnswer: 1
    },
    {
      question: "The Bashorun in Old Oyo was the:",
      options: ["Army general", "Prime Minister / Head of Oyomesi", "Priest", "Tax collector"],
      correctAnswer: 1
    },
    {
      question: "Indirect Rule was most successful in which part of Nigeria?",
      options: ["South-East", "South-West", "North", "Lagos"],
      correctAnswer: 2
    },
    {
      question: "The 'Warrant Chiefs' were created by the British for the:",
      options: ["Hausas", "Yorubas", "Igbos", "Fulanis"],
      correctAnswer: 2
    },
    {
      question: "The Jihad of 1804 was led by:",
      options: ["El-Kanemi", "Uthman Dan Fodio", "Ahmadu Bello", "Murtala Mohammed"],
      correctAnswer: 1
    },
    {
      question: "In the Oyo Empire, the Bashorun could ask the Alaafin to:",
      options: ["Go on leave", "Commit suicide (abdicatet)", "Marry", "Travel"],
      correctAnswer: 1
    },
    {
      question: "The secret society that acted as a check on the Oyomesi and Alaafin was the:",
      options: ["Ogboni", "Ohafia", "Ekpe", "Poro"],
      correctAnswer: 0
    },
    {
      question: "The pre-colonial political head of the Bini Kingdom was the:",
      options: ["Emir", "Oba", "Sultan", "Olu"],
      correctAnswer: 1
    },
    {
      question: "The title of the traditional ruler of Sokoto is:",
      options: ["Emir", "Sultan", "Attah", "Oba"],
      correctAnswer: 1
    },
    {
      question: "A system where one person has absolute power is an:",
      options: ["Aristocracy", "Autocracy", "Democracy", "Oligarchy"],
      correctAnswer: 1
    },
    {
      question: "The Igbos reached decisions through a general meeting of all males called:",
      options: ["Oha-na-eze", "Village Assembly", "Town hall", "Senate"],
      correctAnswer: 1
    },
    {
      question: "Taxes in the Emirate system were called:",
      options: ["Zakat and Jangali", "VAT", "Income tax", "Levy"],
      correctAnswer: 0
    },
    {
      question: "Traditional rulers lost much of their power during:",
      options: ["Jihad", "Colonial rule", "Independence", "Civil war"],
      correctAnswer: 1
    },
    {
      question: "The main reason for Indirect Rule was:",
      options: ["To help Africans", "Shortage of British personnel and funds", "To spread Christianity", "To build schools"],
      correctAnswer: 1
    }
  ],
  "SSS3 - Nigerian Federalism & Political Parties": [
    {
      question: "Federalism in Nigeria was officially adopted in:",
      options: ["1914", "1954", "1960", "1999"],
      correctAnswer: 1
    },
    {
      question: "A major reason for federalism in Nigeria is:",
      options: ["One language", "Ethnic and religious diversity", "Small size", "No money"],
      correctAnswer: 1
    },
    {
      question: "The sharing of power between central and state governments is:",
      options: ["Devolution", "Division of powers", "Centralization", "Cooperation"],
      correctAnswer: 1
    },
    {
      question: "Revenue allocation in Nigeria is the responsibility of:",
      options: ["CBN", "RMAFC", "EFCC", "INEC"],
      correctAnswer: 1
    },
    {
      question: "Which of these is in the 'Exclusive List' in Nigeria?",
      options: ["Education", "Defense (Military) and External Affairs", "Agriculture", "Waste management"],
      correctAnswer: 1
    },
    {
      question: "The 'Concurrent List' contains powers shared by:",
      options: ["Federal and State governments", "State and Local", "Federal and Local", "Federal only"],
      correctAnswer: 0
    },
    {
      question: "The primary aim of a political party is to:",
      options: ["Provide charity", "Acquire political power / Win elections", "Control the police", "Build roads"],
      correctAnswer: 1
    },
    {
      question: "A one-party system is common in:",
      options: ["Democracies", "Communist/Dictatorial states", "Federations", "Monarchies"],
      correctAnswer: 1
    },
    {
      question: "Pressure groups differ from political parties because they:",
      options: ["Don't want power, just influence", "Have more members", "Are illegal", "Have no names"],
      correctAnswer: 0
    },
    {
      question: "The body that conducts elections in Nigeria is:",
      options: ["NPC", "INEC", "EFCC", "NLC"],
      correctAnswer: 1
    },
    {
      question: "Voter registration is a function of:",
      options: ["The Army", "INEC", "The President", "News media"],
      correctAnswer: 1
    },
    {
      question: "The first Nigerian political party (NNDP) was founded by:",
      options: ["Nnamdi Azikiwe", "Herbert Macaulay", "Obafemi Awolowo", "Ahmadu Bello"],
      correctAnswer: 1
    },
    {
      question: "A multi-party system features:",
      options: ["Only one party", "Two main parties", "Three or more parties competing", "No parties"],
      correctAnswer: 2
    },
    {
      question: "Local governments are the _________ tier of government.",
      options: ["First", "Second", "Third", "Fourth"],
      correctAnswer: 2
    },
    {
      question: "Federal Character Principle in Nigeria aims to ensure:",
      options: ["One ethnic group rule", "Balanced representation of all groups in government", "Military control", "High taxes"],
      correctAnswer: 1
    },
    {
      question: "Secondary agent of political socialization is the:",
      options: ["Family", "School", "Peer group", "Mass media"],
      correctAnswer: 1
    },
    {
      question: "Public Opinion reflects the:",
      options: ["View of the President", "Collective views of the people on public issues", "The Army's view", "Foreigners view"],
      correctAnswer: 1
    },
    {
      question: "Disenfranchisement is the:",
      options: ["Right to vote", "Denial of the right to vote", "Voting twice", "Winning an election"],
      correctAnswer: 1
    },
    {
      question: "Campaigns are aimed at:",
      options: ["Stopping elections", "Persuading voters", "Printing money", "Arresting opponents"],
      correctAnswer: 1
    },
    {
      question: "A 'By-election' is held when:",
      options: ["Government changes", "A seat in legislature becomes vacant", "Five years pass", "There is a riot"],
      correctAnswer: 1
    }
  ],
  "SSS3 - International Organizations & Foreign Policy": [
    {
      question: "The primary aim of the United Nations (UN) is to:",
      options: ["Start wars", "Keep international peace and security", "Rule the world", "Lend money"],
      correctAnswer: 1
    },
    {
      question: "The African Union (AU) replaced which organization?",
      options: ["ECOWAS", "OAU", "NEPAD", "OPEC"],
      correctAnswer: 1
    },
    {
      question: "Nigeria's Foreign Policy is primarily focused on:",
      options: ["America", "Europe", "Africa (Africa as its centerpiece)", "Asia"],
      correctAnswer: 2
    },
    {
      question: "The Commonwealth of Nations is an association of:",
      options: ["African states only", "Former British colonies", "Communist states", "Petroleum exporters"],
      correctAnswer: 1
    },
    {
      question: "The permanent headquarters of the UN is in:",
      options: ["London", "Paris", "New York", "Geneva"],
      correctAnswer: 2
    },
    {
      question: "The executive organ of the UN is the:",
      options: ["General Assembly", "Security Council", "International Court of Justice", "Secretariat"],
      correctAnswer: 1
    },
    {
      question: "ECOWAS was formed in 1975 to promote:",
      options: ["War", "Economic cooperation in West Africa", "Sports only", "Religion"],
      correctAnswer: 1
    },
    {
      question: "The 'Veto Power' in the UN Security Council is held by:",
      options: ["All members", "Only 5 permanent members", "The Secretary-General", "African states"],
      correctAnswer: 1
    },
    {
      question: "The supreme organ of the AU is the:",
      options: ["The Secretariat", "Assembly of Heads of State", "African Court", "Commission"],
      correctAnswer: 1
    },
    {
      question: "Non-Alignment policy means:",
      options: ["Following the USA", "Following Russia", "Staying neutral during the Cold War", "Fighting neighbors"],
      correctAnswer: 2
    },
    {
      question: "Diplomacy is the art of:",
      options: ["Fighting", "Negotiating and conducting relations between states", "Lying", "Trading"],
      correctAnswer: 1
    },
    {
      question: "The UN Security Council has how many permanent members?",
      options: ["2", "5", "10", "15"],
      correctAnswer: 1
    },
    {
      question: "Nigeria sent peace-keeping troops to which country under ECOMOG?",
      options: ["USA", "Liberia", "China", "Brazil"],
      correctAnswer: 1
    },
    {
      question: "The official who heads the UN Secretariat is the:",
      options: ["President", "Secretary-General", "Chancellor", "Minister"],
      correctAnswer: 1
    },
    {
      question: "Which organ of the UN is the primary judicial organ?",
      options: ["WHO", "ICJ (World Court)", "UNESCO", "ILO"],
      correctAnswer: 1
    },
    {
      question: "OPEC stands for:",
      options: ["Organization of Petroleum Exporting Countries", "Oil Price Economic Council", "Over Population Economic Commission", "None"],
      correctAnswer: 0
    },
    {
      question: "The 1960 Nigerian foreign policy was based on:",
      options: ["Isolation", "Non-Alignment", "War with UK", "Annexing Ghana"],
      correctAnswer: 1
    },
    {
      question: "The African Union (AU) headquarters is in:",
      options: ["Lagos", "Cairo", "Addis Ababa", "Nairobi"],
      correctAnswer: 2
    },
    {
      question: "The specialized UN agency for children is:",
      options: ["UNICEF", "WHO", "FAO", "IMF"],
      correctAnswer: 0
    },
    {
      question: "Sovereign Equality in international relations means:",
      options: ["Big states rule small ones", "All states have equal rights under law", "No states are equal", "One global president"],
      correctAnswer: 1
    }
  ],
  "SSS1 - Scope of Geography & The Solar System": [
    {
      question: "Geography is the study of the Earth as the home of:",
      options: ["Animals", "Plants", "Man", "Stars"],
      correctAnswer: 2
    },
    {
      question: "The solar system consists of the sun and how many known planets?",
      options: ["7", "8", "9", "10"],
      correctAnswer: 1
    },
    {
      question: "The planet closest to the sun is:",
      options: ["Venus", "Earth", "Mercury", "Mars"],
      correctAnswer: 2
    },
    {
      question: "The largest planet in the solar system is:",
      options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
      correctAnswer: 1
    },
    {
      question: "The movement of the Earth on its axis is called:",
      options: ["Revolution", "Rotation", "Orbit", "Gravity"],
      correctAnswer: 1
    },
    {
      question: "What causes the four seasons?",
      options: ["Earth's rotation", "Earth's revolution and tilt of axis", "Moon's orbit", "Sun's heat"],
      correctAnswer: 1
    },
    {
      question: "The imaginery line that divides the Earth into North and South is the:",
      options: ["Prime Meridian", "Equator", "Tropic of Cancer", "Arctic Circle"],
      correctAnswer: 1
    },
    {
      question: "How long does it take for the Earth to complete one rotation?",
      options: ["12 hours", "24 hours", "365 days", "1 month"],
      correctAnswer: 1
    },
    {
      question: "The layer of air surrounding the Earth is the:",
      options: ["Lithosphere", "Hydrosphere", "Atmosphere", "Biosphere"],
      correctAnswer: 2
    },
    {
      question: "The planet known for its beautiful rings is:",
      options: ["Mars", "Jupiter", "Saturn", "Venus"],
      correctAnswer: 2
    },
    {
      question: "The distance from the North Pole to the South Pole along a meridian is:",
      options: ["180°", "360°", "10,000 km", "None"],
      correctAnswer: 0
    },
    {
      question: "Which of these is a branch of Physical Geography?",
      options: ["Population Geography", "Geomorphology", "Urban Geography", "Agricultural Geography"],
      correctAnswer: 1
    },
    {
      question: "The shape of the Earth is described as a/an:",
      options: ["Perfect sphere", "Geoid (Oblate Spheroid)", "Flat plane", "Oval"],
      correctAnswer: 1
    },
    {
      question: "Longitude measures distance East or West of the:",
      options: ["Equator", "Prime Meridian (Greenwich)", "Tropic of Capricorn", "International Date Line"],
      correctAnswer: 1
    },
    {
      question: "The time difference between two longitudes of 15° is:",
      options: ["4 minutes", "1 hour", "12 hours", "1 day"],
      correctAnswer: 1
    },
    {
      question: "When it is 12 noon at Greenwich (0°), what is the time at 15°E?",
      options: ["11 AM", "1 PM", "12 midnight", "2 PM"],
      correctAnswer: 1
    },
    {
      question: "The planet Earth is the _______ planet from the sun.",
      options: ["1st", "2nd", "3rd", "4th"],
      correctAnswer: 2
    },
    {
      question: "Rocks formed from molten magma are:",
      options: ["Sedimentary", "Metamorphic", "Igneous", "Lava rocks"],
      correctAnswer: 2
    },
    {
      question: "What type of rock is limestone?",
      options: ["Igneous", "Metamorphic", "Sedimentary", "Plutonic"],
      correctAnswer: 2
    },
    {
      question: "Marble is formed from the metamorphism of:",
      options: ["Limestone", "Sandstone", "Shale", "Granite"],
      correctAnswer: 0
    }
  ],
  "SSS1 - Environmental Resources & Conservation": [
    {
      question: "Natural resources that can be replaced over time are:",
      options: ["Non-renewable", "Renewable", "Finite", "Depletable"],
      correctAnswer: 1
    },
    {
      question: "Which of the following is a non-renewable resource?",
      options: ["Solar energy", "Crude oil", "Water", "Forest"],
      correctAnswer: 1
    },
    {
      question: "The wise use and protection of natural resources is:",
      options: ["Exploitation", "Conservation", "Destruction", "Consumption"],
      correctAnswer: 1
    },
    {
      question: "One major way to conserve forest resources is:",
      options: ["Deforestation", "Afforestation", "Bush burning", "Clearing"],
      correctAnswer: 1
    },
    {
      question: "Environmental pollution can be caused by:",
      options: ["Planting trees", "Industrial waste disposal", "Animal crossing", "Sunset"],
      correctAnswer: 1
    },
    {
      question: "Abiotic resources include:",
      options: ["Plants and Animals", "Solar energy, Minerals, Soil", "Humans", "Fungi"],
      correctAnswer: 1
    },
    {
      question: "The layer of the Earth that consists of soil and rocks is the:",
      options: ["Atmosphere", "Lithosphere", "Hydrosphere", "Exosphere"],
      correctAnswer: 1
    },
    {
      question: "A major problem of mineral exploitation in Nigeria is:",
      options: ["Too much water", "Environmental degradation and spills", "Lack of minerals", "Cold weather"],
      correctAnswer: 1
    },
    {
      question: "Conservation of water involves preventing:",
      options: ["Flow", "Pollution and wastage", "Freezing", "Storage"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a clean source of energy?",
      options: ["Coal", "Wind energy", "Petroleum", "Natural gas"],
      correctAnswer: 1
    },
    {
      question: "Sustainable development means meeting needs without:",
      options: ["Using money", "Compromising future generations ability to meet their needs", "Using machines", "Trading"],
      correctAnswer: 1
    },
    {
      question: "Wildlife conservation aims to protect:",
      options: ["Domestic cats", "Endangered species and habitats", "Only lions", "City parks"],
      correctAnswer: 1
    },
    {
      question: "Recycling is a method used to reduce:",
      options: ["Prices", "Waste and resource depletion", "Population", "Rainfall"],
      correctAnswer: 1
    },
    {
      question: "Ozone layer depletion is primarily caused by:",
      options: ["CO2", "CFCs (Chlorofluorocarbons)", "Oxygen", "Water vapor"],
      correctAnswer: 1
    },
    {
      question: "Soil erosion can be prevented by:",
      options: ["Overgrazing", "Terracing and cover cropping", "Burning grass", "Building skyscrapers"],
      correctAnswer: 1
    },
    {
      question: "Geothermal energy is obtained from:",
      options: ["Sun", "Heat from the Earth's interior", "Wind", "Waterfalls"],
      correctAnswer: 1
    },
    {
      question: "Desertification is the spread of desert conditions into:",
      options: ["The ocean", "Fertile land", "The sky", "Caves"],
      correctAnswer: 1
    },
    {
      question: "Which organelle of a country manages environmental affairs?",
      options: ["Ministry of Environment", "Police", "Central Bank", "Post office"],
      correctAnswer: 0
    },
    {
      question: "Acid rain is caused by emission of:",
      options: ["Sulfur dioxide and Nitrogen oxides", "Pure oxygen", "Argon", "Helium"],
      correctAnswer: 0
    },
    {
      question: "Bio-degradable waste is waste that:",
      options: ["Can be broken down by bacteria", "Stays forever", "Is made of metal", "Is poisonous to all life"],
      correctAnswer: 0
    }
  ],
  "SSS2 - Map Reading & Statistical Mapping": [
    {
      question: "The ratio between distance on a map and distance on the ground is the:",
      options: ["Legend", "Scale", "Grid", "Compass"],
      correctAnswer: 1
    },
    {
      question: "A scale of 1:50,000 means 1 unit on the map represents:",
      options: ["50 units on ground", "50,000 units on ground", "50,000 km", "50 miles"],
      correctAnswer: 1
    },
    {
      question: "Imaginary lines on a map connecting points of equal height are:",
      options: ["Isobars", "Isohyets", "Contours", "Isotherms"],
      correctAnswer: 2
    },
    {
      question: "The bearing of West from North is:",
      options: ["90°", "180°", "270°", "360°"],
      correctAnswer: 2
    },
    {
      question: "A nucleated settlement is one where houses are:",
      options: ["Far apart", "Clustered together", "In a single line", "Random"],
      correctAnswer: 1
    },
    {
      question: "Linear settlement patterns often follow:",
      options: ["Rivers or Roads", "Mountains", "Forests", "Circular paths"],
      correctAnswer: 0
    },
    {
      question: "A topographic map shows:",
      options: ["Only roads", "Natural and man-made features", "Only stars", "Only soil types"],
      correctAnswer: 1
    },
    {
      question: "The angular distance between True North and Magnetic North is:",
      options: ["Bearing", "Magnetic Declination / Variation", "Azimuth", "Grid North"],
      correctAnswer: 1
    },
    {
      question: "Closeness of contour lines indicates a:",
      options: ["Gentle slope", "Steep slope", "Flat plain", "Valley"],
      correctAnswer: 1
    },
    {
      question: "In map reading, R.F. stands for:",
      options: ["Real Factor", "Representative Fraction", "Radio Frequency", "River Flow"],
      correctAnswer: 1
    },
    {
      question: "A Bar Graph is best used for comparing:",
      options: ["Discrete data or categories", "Continuous time trends", "Parts of a whole", "Map directions"],
      correctAnswer: 0
    },
    {
      question: "A Dot Map is used to show:",
      options: ["Temperature", "Distribution (e.g. population)", "Height", "Boundaries"],
      correctAnswer: 1
    },
    {
      question: "Chloropleth maps use shading to represent:",
      options: ["River depths", "Statistical data classes", "Road types", "Political alliances"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a large scale map?",
      options: ["1:1,000,000", "1:2,500", "1:100,000", "1:50,000"],
      correctAnswer: 1
    },
    {
      question: "The method of showing relief using light and shade is:",
      options: ["Contours", "Hachures", "Hill shading", "Spot heights"],
      correctAnswer: 2
    },
    {
      question: "A V-shaped contour pattern pointing downstream indicates a:",
      options: ["Ridge", "Valley / River valley", "Spur", "Plateau"],
      correctAnswer: 1
    },
    {
      question: "The cross-sectional view of a landform is a:",
      options: ["Plan", "Profile", "Sketch", "Index"],
      correctAnswer: 1
    },
    {
      question: "Grid references are used to find:",
      options: ["Time", "Exact location on a map", "Distance", "Scale"],
      correctAnswer: 1
    },
    {
      question: "Intervisibility between two points on a map means:",
      options: ["They are the same color", "One can be seen from the other", "They are far apart", "Neither can be seen"],
      correctAnswer: 1
    },
    {
      question: "Map interpretation involves analyzing:",
      options: ["Only the title", "Relief, drainage, and human activities", "The price of the map", "The paper quality"],
      correctAnswer: 1
    }
  ],
  "SSS2 - Regional Geography of Nigeria": [
    {
      question: "Nigeria is located in which part of Africa?",
      options: ["East", "West", "North", "South"],
      correctAnswer: 1
    },
    {
      question: "Nigeria lies approximately between latitudes:",
      options: ["4°N and 14°N", "0° and 10°S", "20°N and 30°N", "10°S and 20°S"],
      correctAnswer: 0
    },
    {
      question: "The highest mountain in Nigeria is:",
      options: ["Idanre Hills", "Dimlang (Chappal Waddi)", "Zuma Rock", "Olumo Rock"],
      correctAnswer: 1
    },
    {
      question: "The major rivers in Nigeria meet at Lokoja to form a:",
      options: ["Delta", "Confluence", "Estuary", "Basin"],
      correctAnswer: 1
    },
    {
      question: "Nigeria's climate is mostly:",
      options: ["Tropical", "Temperate", "Arctic", "Mediterranean"],
      correctAnswer: 0
    },
    {
      question: "Mangrove swamp vegetation is found in the:",
      options: ["Middle Belt", "Far North", "Coastal South", "Western Highlands"],
      correctAnswer: 2
    },
    {
      question: "The 'Middle Belt' of Nigeria is notable for being a:",
      options: ["Desert", "Transition zone between forest and savanna", "Swamp", "High mountain range"],
      correctAnswer: 1
    },
    {
      question: "The leading export crop of Northern Nigeria is:",
      options: ["Cocoa", "Groundnut", "Rubber", "Palm Oil"],
      correctAnswer: 1
    },
    {
      question: "Petroleum is mostly found in the:",
      options: ["Niger Delta region", "Jos Plateau", "Chad Basin", "Sokoto Basin"],
      correctAnswer: 0
    },
    {
      question: "The capital of Nigeria is:",
      options: ["Lagos", "Kano", "Port Harcourt", "Abuja"],
      correctAnswer: 3
    },
    {
      question: "Which state is known as the 'Power State'?",
      options: ["Lagos", "Niger", "Kano", "Enugu"],
      correctAnswer: 1
    },
    {
      question: "Nigeria's population is estimated to be over:",
      options: ["50 million", "100 million", "200 million", "500 million"],
      correctAnswer: 2
    },
    {
      question: "Transportation by water in Nigeria is most significant in the:",
      options: ["North", "Riverine South", "Jos Plateau", "Obudu"],
      correctAnswer: 1
    },
    {
      question: "The Kainji Dam is primarily for:",
      options: ["Fishing", "Hydroelectric power (HEP)", "Tourism", "Irrigation only"],
      correctAnswer: 1
    },
    {
      question: "The Jos Plateau is famous for mining:",
      options: ["Gold", "Tin and Columbite", "Coal", "Crude Oil"],
      correctAnswer: 1
    },
    {
      question: "Coal is mined in commercial quantities in:",
      options: ["Enugu", "Ibadan", "Calabar", "Maiduguri"],
      correctAnswer: 0
    },
    {
      question: "The major problem of Nigerian agriculture is:",
      options: ["Lack of land", "Inadequate modern tools and credit", "Too much rain", "No markets"],
      correctAnswer: 1
    },
    {
      question: "Which ethnic group is largest in Northern Nigeria?",
      options: ["Igbo", "Yoruba", "Hausa/Fulani", "Ijaw"],
      correctAnswer: 2
    },
    {
      question: "The Second Niger Bridge connects Delta State to:",
      options: ["Lagos", "Anambra", "Edo", "Rivers"],
      correctAnswer: 1
    },
    {
      question: "The largest city in Nigeria by population is:",
      options: ["Abuja", "Lagos", "Ibadan", "Kano"],
      correctAnswer: 1
    }
  ],
  "SSS3 - Environmental Hazards & Disasters": [
    {
      question: "An environmental hazard causing sudden shaking of the ground is a/an:",
      options: ["Flood", "Earthquake", "Drought", "Tsunami"],
      correctAnswer: 1
    },
    {
      question: "Overflow of water onto land that is normally dry is:",
      options: ["Drought", "Flood", "Erosion", "Landslide"],
      correctAnswer: 1
    },
    {
      question: "A long period with little or no rainfall is a:",
      options: ["Flood", "Drought", "Hurricane", "Typhoon"],
      correctAnswer: 1
    },
    {
      question: "Hazards caused by human activities are:",
      options: ["Natural hazards", "Anthropogenic (Man-made) hazards", "Celestial hazards", "None"],
      correctAnswer: 1
    },
    {
      question: "A large wave caused by undersea earthquakes is a:",
      options: ["Tide", "Tsunami", "Cyclone", "Current"],
      correctAnswer: 1
    },
    {
      question: "Deforestation contributes to:",
      options: ["Soil erosion and Global warming", "Colder weather", "More rainfall", "Better soil"],
      correctAnswer: 0
    },
    {
      question: "The primary cause of oil spills in the Niger Delta is:",
      options: ["Fishing", "Pipeline sabotage and accidents", "Rainfall", "Solar energy"],
      correctAnswer: 1
    },
    {
      question: "Burning of fossil fuels increases the concentration of:",
      options: ["Oxygen", "Carbon dioxide (CO2)", "Nitrogen", "Helium"],
      correctAnswer: 1
    },
    {
      question: "An instrument for measuring earthquake magnitude is a:",
      options: ["Barometer", "Seismograph", "Anemometer", "Thermometer"],
      correctAnswer: 1
    },
    {
      question: "Gully erosion is most severe in which part of Nigeria?",
      options: ["Northern plains", "South-Eastern Nigeria (e.g. Anambra/Enugu)", "Lagos island", "Jos"],
      correctAnswer: 1
    },
    {
      question: "Gas flaring in Nigeria causes:",
      options: ["Cheaper gas", "Air pollution and health issues", "Cleaner air", "Snow"],
      correctAnswer: 1
    },
    {
      question: "Coastal erosion is mainly caused by:",
      options: ["Wind", "Wave action", "Cars", "Birds"],
      correctAnswer: 1
    },
    {
      question: "Global warming leads to:",
      options: ["Rising sea levels", "Decreasing temperatures", "More ice at poles", "Less evaporation"],
      correctAnswer: 0
    },
    {
      question: "A hazard characterized by high speed rotating winds is a:",
      options: ["Flood", "Tornado/Hurricane", "Landslide", "Pollution"],
      correctAnswer: 1
    },
    {
      question: "The discharge of waste into rivers is:",
      options: ["Air pollution", "Water pollution", "Soil pollution", "Littering only"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a way to mitigate flood disasters?",
      options: ["Building on floodplains", "Construction of dams and levees", "Blocking drains", "Cutting all trees"],
      correctAnswer: 1
    },
    {
      question: "Nuclear radiation is an example of a/an:",
      options: ["Natural hazard", "Technological hazard", "Agricultural hazard", "Biological hazard"],
      correctAnswer: 1
    },
    {
      question: "Landslides usually occur on:",
      options: ["Flat ground", "Steep slopes", "In the ocean", "In the clouds"],
      correctAnswer: 1
    },
    {
      question: "Desertification results in the loss of:",
      options: ["Sand", "Vegetation and fertile soil", "Heat", "Rocks"],
      correctAnswer: 1
    },
    {
      question: "Wildfires can be caused by:",
      options: ["Lightning or human negligence", "Too much rain", "Cold wind", "Night time"],
      correctAnswer: 0
    }
  ],
  "SSS3 - World Geography & Economic Blocs": [
    {
      question: "The world's largest continent is:",
      options: ["Africa", "Asia", "North America", "Europe"],
      correctAnswer: 1
    },
    {
      question: "The deepest ocean in the world is the:",
      options: ["Atlantic", "Pacific", "Indian", "Arctic"],
      correctAnswer: 1
    },
    {
      question: "Which country has the largest population in the world (as of 2023)?",
      options: ["China", "India", "USA", "Russia"],
      correctAnswer: 1
    },
    {
      question: "Mount Everest, the highest peak, is in:",
      options: ["Africa", "Asia (Himalayas)", "Europe", "South America"],
      correctAnswer: 1
    },
    {
      question: "The African continent is separated from Europe by the:",
      options: ["Atlantic Ocean", "Mediterranean Sea", "Red Sea", "Indian Ocean"],
      correctAnswer: 1
    },
    {
      question: "Japan is an island nation located in:",
      options: ["West Africa", "East Asia", "Eastern Europe", "South America"],
      correctAnswer: 1
    },
    {
      question: "Which economic bloc includes mostly European countries?",
      options: ["ECOWAS", "European Union (EU)", "AU", "ASEAN"],
      correctAnswer: 1
    },
    {
      question: "The headquarters of ECOWAS is in:",
      options: ["Lagos", "Accra", "Abuja", "Dakar"],
      correctAnswer: 2
    },
    {
      question: "The leading industrial nation in North America is:",
      options: ["Canada", "Mexico", "USA", "Cuba"],
      correctAnswer: 2
    },
    {
      question: "The Nile, the longest river, is in:",
      options: ["America", "Africa", "Asia", "Europe"],
      correctAnswer: 1
    },
    {
      question: "The Amazon rainforest is primarily in:",
      options: ["Africa", "Asia", "South America (Brazil)", "Australia"],
      correctAnswer: 2
    },
    {
      question: "A major economic bloc in Southeast Asia is:",
      options: ["AU", "EU", "ASEAN", "OPEC"],
      correctAnswer: 2
    },
    {
      question: "The Suez Canal connects the Mediterranean Sea to the:",
      options: ["Red Sea", "Atlantic Ocean", "Pacific Ocean", "Indian Ocean"],
      correctAnswer: 0
    },
    {
      question: "Which country is both a continent and a country?",
      options: ["Japan", "Australia", "New Zealand", "Madagascar"],
      correctAnswer: 1
    },
    {
      question: "The 'Old World' usually refers to:",
      options: ["America", "Europe, Asia, and Africa", "Australia", "The Moon"],
      correctAnswer: 1
    },
    {
      question: "Economic cooperation between countries aims to:",
      options: ["Start wars", "Increase trade and development", "Tax citizens more", "Close borders"],
      correctAnswer: 1
    },
    {
      question: "Russia is located in two continents:",
      options: ["Africa and Asia", "Europe and Asia", "North and South America", "Europe and Africa"],
      correctAnswer: 1
    },
    {
      question: "The Sahara Desert is located in:",
      options: ["South Africa", "North Africa", "East Africa", "Middle East"],
      correctAnswer: 1
    },
    {
      question: "The United Nations was formed after:",
      options: ["World War I", "World War II", "The Cold War", "The Golf War"],
      correctAnswer: 1
    },
    {
      question: "Global trade routes are often determined by:",
      options: ["Only birds", "Geography and transportation networks", "Random choice", "Colors of flags"],
      correctAnswer: 1
    }
  ],
  "SSS1 - Introduction to Genres and Literary Devices": [
    {
      question: "The three main genres of literature are:",
      options: ["Prose, Poetry, and Drama", "Novel, Story, and Poem", "Fiction, Non-fiction, and Film", "Acting, Writing, and Singing"],
      correctAnswer: 0
    },
    {
      question: "A comparison between two unlike things using 'as' or 'like' is a:",
      options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
      correctAnswer: 1
    },
    {
      question: "Giving human qualities to non-human things is called:",
      options: ["Alliteration", "Simile", "Personification", "Irony"],
      correctAnswer: 2
    },
    {
      question: "Exaggeration for for emphasis is known as:",
      options: ["Litotes", "Hyperbole", "Oxymoron", "Onomatopoeia"],
      correctAnswer: 1
    },
    {
      question: "The repetition of consonant sounds at the beginning of words is:",
      options: ["Alliteration", "Assonance", "Rhythm", "Rhyme"],
      correctAnswer: 0
    },
    {
      question: "A long work of narrative prose fiction is a:",
      options: ["Short story", "Poem", "Novel", "Play"],
      correctAnswer: 2
    },
    {
      question: "A literature genre intended to be performed on stage is:",
      options: ["Prose", "Poetry", "Drama", "Essay"],
      correctAnswer: 2
    },
    {
      question: "The persons who take part in the action of a story are:",
      options: ["Authors", "Characters", "Narrators", "Audience"],
      correctAnswer: 1
    },
    {
      question: "The central idea or message of a literary work is the:",
      options: ["Plot", "Setting", "Theme", "Tone"],
      correctAnswer: 2
    },
    {
      question: "The emotional atmosphere of a piece of writing is its:",
      options: ["Mood", "Style", "Genre", "Format"],
      correctAnswer: 0
    },
    {
      question: "Words that imitate the sound they describe (e.g. 'bang', 'hiss') are:",
      options: ["Metonyms", "Onomatopoeia", "Synecdoche", "Paradox"],
      correctAnswer: 1
    },
    {
      question: "A contradiction in terms (e.g. 'bitter-sweet') is a/an:",
      options: ["Irony", "Oxymoron", "Simile", "Pun"],
      correctAnswer: 1
    },
    {
      question: "The sequence of events in a story is the:",
      options: ["Theme", "Setting", "Plot", "Climax"],
      correctAnswer: 2
    },
    {
      question: "A play that ends sadly, usually with the death of the hero, is a:",
      options: ["Comedy", "Tragedy", "Farce", "Melodrama"],
      correctAnswer: 1
    },
    {
      question: "The time and place in which a story occurs is the:",
      options: ["Plot", "Setting", "Scene", "Atmosphere"],
      correctAnswer: 1
    },
    {
      question: "The teller of a story in a novel is the:",
      options: ["Character", "Narrator", "Director", "Speaker"],
      correctAnswer: 1
    },
    {
      question: "A short poem that expresses the personal feelings of a speaker is a:",
      options: ["Epic", "Lyric", "Ballad", "Sonnet"],
      correctAnswer: 1
    },
    {
      question: "Irony occurs when:",
      options: ["Meaning is the same as words", "The opposite of what is expected happens", "A story is long", "There is no ending"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a form of drama?",
      options: ["Epic", "Tragi-comedy", "Ode", "Elegy"],
      correctAnswer: 1
    },
    {
      question: "A figure of speech in which a part represents the whole (e.g. 'all hands on deck') is:",
      options: ["Metaphor", "Synecdoche", "Litotes", "Euphemism"],
      correctAnswer: 1
    }
  ],
  "SSS2 - Poetry Analysis (Prescribed Poems)": [
    {
      question: "The division of a poem into groups of lines is called a:",
      options: ["Paragraph", "Stanza", "Chapter", "Scene"],
      correctAnswer: 1
    },
    {
      question: "A poem of fourteen lines with a specific rhyme scheme is a/an:",
      options: ["Ode", "Sonnet", "Limerick", "Epic"],
      correctAnswer: 1
    },
    {
      question: "The person speaking in a poem is the:",
      options: ["Author", "Persona / Speaker", "Character", "Narrator"],
      correctAnswer: 1
    },
    {
      question: "Repetition of vowel sounds within words is:",
      options: ["Alliteration", "Assonance", "Consonance", "Rhyme"],
      correctAnswer: 1
    },
    {
      question: "A poem mourning the dead is a/an:",
      options: ["Elegy", "Epigram", "Ode", "Ballad"],
      correctAnswer: 0
    },
    {
      question: "Poetry that does not follow a specific meter or rhyme scheme is:",
      options: ["Blank verse", "Free verse", "Lyric", "Epic"],
      correctAnswer: 1
    },
    {
      question: "Enjambment in poetry means:",
      options: ["A line ends with a full stop", "A sentence runs over to the next line", "The poem is funny", "The poem uses slang"],
      correctAnswer: 1
    },
    {
      question: "The pattern of beats or stresses in a poem is called:",
      options: ["Rhyme", "Rhythm / Meter", "Stanza", "Pitch"],
      correctAnswer: 1
    },
    {
      question: "A poem that tells a story, often meant to be sung, is a:",
      options: ["Lament", "Ballad", "Sonnet", "Haiku"],
      correctAnswer: 1
    },
    {
      question: "Imagery in poetry appeals to the reader's:",
      options: ["Sense of smell only", "Senses (Sight, Touch, etc.)", "Logic", "Grammar"],
      correctAnswer: 1
    },
    {
      question: "Which literary device is used here: 'The wind whispered through the trees'?",
      options: ["Simile", "Personification", "Oxymoron", "Punt"],
      correctAnswer: 1
    },
    {
      question: "A short, witty statement in verse or prose is a/an:",
      options: ["Epic", "Elegy", "Epigram", "Ode"],
      correctAnswer: 2
    },
    {
      question: "The repetition of the same sound at the end of lines is:",
      options: ["Rhythm", "Rhyme", "Stanza", "Foot"],
      correctAnswer: 1
    },
    {
      question: "A poem written in praise of a person, object or event is an:",
      options: ["Elegy", "Ode", "Sonnet", "Dirge"],
      correctAnswer: 1
    },
    {
      question: "The turning point in a sonnet is called the:",
      options: ["Pivot", "Volta", "Stanza", "Ending"],
      correctAnswer: 1
    },
    {
      question: "In poetry, a 'couplet' consists of:",
      options: ["Three lines", "Two rhyming lines", "Four lines", "One line"],
      correctAnswer: 1
    },
    {
      question: "Symbolism in poetry uses an object to represent a/an:",
      options: ["Color", "Abstract idea", "Person only", "Sound"],
      correctAnswer: 1
    },
    {
      question: "A pause within a line of poetry is a:",
      options: ["Stop", "Caesura", "Enjambment", "Climax"],
      correctAnswer: 1
    },
    {
      question: "Biblical or mythological references in poetry are common examples of:",
      options: ["Allusion", "Paradox", "Metonymy", "Irony"],
      correctAnswer: 0
    },
    {
      question: "The tone of a poem reflects the speaker's:",
      options: ["Wealth", "Attitude toward the subject", "Physical height", "Age"],
      correctAnswer: 1
    }
  ],
  "SSS3 - Prose and Drama Analysis (Prescribed Texts)": [
    {
      question: "A play where the main character is brought to ruin due to a flaw is a:",
      options: ["Comedy", "Tragedy", "Satire", "Farce"],
      correctAnswer: 1
    },
    {
      question: "The highest point of tension in a plot is the:",
      options: ["Introduction", "Falling action", "Climax", "Exposition"],
      correctAnswer: 2
    },
    {
      question: "A 'Soliloquy' in a play is a speech delivered by a character:",
      options: ["To another character", "Alone on stage, revealing thoughts", "To the audience only", "In a song"],
      correctAnswer: 1
    },
    {
      question: "The process of revealing a character's personality is:",
      options: ["Plotting", "Characterization", "Setting", "Styling"],
      correctAnswer: 1
    },
    {
      question: "A character who stays the same throughout a story is a:",
      options: ["Dynamic character", "Static character", "Round character", "Main character"],
      correctAnswer: 1
    },
    {
      question: "The 'Protagonist' is the:",
      options: ["Villain", "Main character / Hero", "Messenger", "Minor character"],
      correctAnswer: 1
    },
    {
      question: "The main opponent of the hero is the:",
      options: ["Ally", "Antagonist", "Chorus", "Foil"],
      correctAnswer: 1
    },
    {
      question: "A literature style that uses humor and irony to criticize society is:",
      options: ["Romance", "Satire", "Epic", "Biography"],
      correctAnswer: 1
    },
    {
      question: "In drama, an 'Aside' is spoken to:",
      options: ["All characters", "The audience, while others on stage 'don't hear'", "The director", "God"],
      correctAnswer: 1
    },
    {
      question: "The background information provided at the start of a play/story is:",
      options: ["Climax", "Exposition", "Denouement", "Conflict"],
      correctAnswer: 1
    },
    {
      question: "A story written about the author's own life is an:",
      options: ["Biography", "Autobiography", "Fable", "Myth"],
      correctAnswer: 1
    },
    {
      question: "A brief story that teaches a moral lesson, often with animals, is a:",
      options: ["Novel", "Fable", "Epic", "Legend"],
      correctAnswer: 1
    },
    {
      question: "Dramatic irony occurs when:",
      options: ["A character dies", "The audience knows something a character doesn't", "The stage is empty", "The actors laugh"],
      correctAnswer: 1
    },
    {
      question: "Stage directions in a play provide instructions for:",
      options: ["The readers only", "Actors and production (movement, lighting)", "The author", "History"],
      correctAnswer: 1
    },
    {
      question: "A 'Tragic Flaw' is also known as:",
      options: ["Hubris", "Hamartia", "Catharsis", "Nemesis"],
      correctAnswer: 1
    },
    {
      question: "The resolution or 'unknotting' of the plot is the:",
      options: ["Exposition", "Denouement", "Rising action", "Conflict"],
      correctAnswer: 1
    },
    {
      question: "A 'Round Character' is one who is:",
      options: ["Fat", "Complex and well-developed", "Simple and one-sided", "Boring"],
      correctAnswer: 1
    },
    {
      question: "Direct speech between characters in a play/novel is:",
      options: ["Monologue", "Dialogue", "Prologue", "Epilogue"],
      correctAnswer: 1
    },
    {
      question: "A 'Flashback' is a technique used to show:",
      options: ["Future events", "Past events", "Dreams", "Scientific facts"],
      correctAnswer: 1
    },
    {
      question: "The point of view where the narrator is a character is:",
      options: ["First person", "Third person omniscient", "Third person limited", "Dramatic"],
      correctAnswer: 0
    }
  ],
  "SSS1 - Introduction to Computing & Evolution of Computers": [
    {
      question: "Which of the following is an example of an early computing device?",
      options: ["Laptop", "Smartphone", "Abacus", "Smartwatch"],
      correctAnswer: 2
    },
    {
      question: "The first generation of computers used _________ as internal components.",
      options: ["Transistors", "Vacuum tubes", "Integrated circuits", "Microprocessors"],
      correctAnswer: 1
    },
    {
      question: "Electronic Numerical Integrator and Computer (ENIAC) belongs to which generation?",
      options: ["First", "Second", "Third", "Fourth"],
      correctAnswer: 0
    },
    {
      question: "The second generation of computers used _________ to replace vacuum tubes.",
      options: ["Registers", "Transistors", "Chips", "Wires"],
      correctAnswer: 1
    },
    {
      question: "John Napier invented which calculating device?",
      options: ["Slide rule", "Napier's Bones", "Difference engine", "Analytical engine"],
      correctAnswer: 1
    },
    {
      question: "The 'Father of Computers' is:",
      options: ["Bill Gates", "Charles Babbage", "Blaise Pascal", "Steve Jobs"],
      correctAnswer: 1
    },
    {
      question: "The fourth generation of computers is characterized by the use of:",
      options: ["Vacuum tubes", "Transistors", "Very Large Scale Integration (VLSI)", "Valves"],
      correctAnswer: 2
    },
    {
      question: "Binary digit is commonly known as a:",
      options: ["Byte", "Bit", "Word", "Nibble"],
      correctAnswer: 1
    },
    {
      question: "A byte consists of how many bits?",
      options: ["4", "8", "16", "32"],
      correctAnswer: 1
    },
    {
      question: "Which device was developed by Blaise Pascal in 1642?",
      options: ["Pascaline", "Stepped Reckoner", "Hollerith card", "Abacus"],
      correctAnswer: 0
    },
    {
      question: "The central processing unit (CPU) consists of ALU and:",
      options: ["Registers", "Memory Unit", "Control Unit", "Hard drive"],
      correctAnswer: 2
    },
    {
      question: "Data that has been processed into a meaningful form is:",
      options: ["Input", "Software", "Information", "Program"],
      correctAnswer: 2
    },
    {
      question: "An example of an input device is a:",
      options: ["Monitor", "Printer", "Keyboard", "Speaker"],
      correctAnswer: 2
    },
    {
      question: "Which of these is a permanent storage device?",
      options: ["RAM", "ROM", "Hard Disk", "Cache"],
      correctAnswer: 2
    },
    {
      question: "Software that controls the hardware and coordinates computer activities is:",
      options: ["Browser", "Application software", "Operating System", "Compiler"],
      correctAnswer: 2
    },
    {
      question: "IBM PCs were initially built with which generation of technology?",
      options: ["First", "Second", "Third", "Fourth"],
      correctAnswer: 3
    },
    {
      question: "Which device was used to store and process data using punched cards?",
      options: ["Slide rule", "Hollerith's Census Machine", "Leibniz Calculator", "Tablet"],
      correctAnswer: 1
    },
    {
      question: "A mainframe computer is used by:",
      options: ["One person at home", "Large organizations for mass data processing", "Children for games only", "Robots only"],
      correctAnswer: 1
    },
    {
      question: "Artificial Intelligence (AI) is associated with which generation?",
      options: ["Third", "Fourth", "Fifth", "Sixth"],
      correctAnswer: 2
    },
    {
      question: "The brain of the computer is the:",
      options: ["Monitor", "CPU", "Keyboard", "RAM"],
      correctAnswer: 1
    }
  ],
  "SSS2 - Computer Hardware & Software Concepts": [
    {
      question: "ROM stands for:",
      options: ["Random Only Memory", "Read Only Memory", "Ready On Memory", "Real Object Memory"],
      correctAnswer: 1
    },
    {
      question: "Which part of the computer is responsible for arithmetic and logic operations?",
      options: ["Control Unit", "ALU", "Memory Unit", "I/O Unit"],
      correctAnswer: 1
    },
    {
      question: "The volatile memory that loses its content when the power is off is:",
      options: ["ROM", "RAM", "Hard Disk", "Flash drive"],
      correctAnswer: 1
    },
    {
      question: "Software that allows users to perform specific tasks like typing is:",
      options: ["System software", "Application software", "Firmware", "Device drivers"],
      correctAnswer: 1
    },
    {
      question: "MS Word is an example of:",
      options: ["Spreadsheet software", "Word processing software", "Database software", "Operating system"],
      correctAnswer: 1
    },
    {
      question: "An example of an output device is a:",
      options: ["Mouse", "Microphone", "Monitor", "Scanner"],
      correctAnswer: 2
    },
    {
      question: "The 'motherboard' is the:",
      options: ["Case of the computer", "Main circuit board", "Power supply", "Software package"],
      correctAnswer: 1
    },
    {
      question: "A high-speed pointer device used mostly for games is a:",
      options: ["Keyboard", "Joystick", "Printer", "Plotter"],
      correctAnswer: 1
    },
    {
      question: "USB stands for:",
      options: ["Universal Serial Bus", "United Software Base", "User System Backup", "Universal Slot Board"],
      correctAnswer: 0
    },
    {
      question: "The software that translates high-level programs into machine code at once is a:",
      options: ["Interpreter", "Compiler", "Assembler", "Editor"],
      correctAnswer: 1
    },
    {
      question: "GUI stands for:",
      options: ["General User Interface", "Graphical User Interface", "Global User Input", "Graph Unit Index"],
      correctAnswer: 1
    },
    {
      question: "Windows 10, Linux, and MacOS are examples of:",
      options: ["Browsers", "Operating Systems", "Antivirus software", "Graphic tools"],
      correctAnswer: 1
    },
    {
      question: "A plotter is used for:",
      options: ["Small document printing", "High-quality architectural/engineering drawings", "Scanning", "Typing"],
      correctAnswer: 1
    },
    {
      question: "The smallest unit of storage is a:",
      options: ["Byte", "Bit", "Kilobyte", "Megabyte"],
      correctAnswer: 1
    },
    {
      question: "Device drivers are types of:",
      options: ["Application software", "System software", "Utilities only", "Hardware"],
      correctAnswer: 1
    },
    {
      question: "1 Gigabyte (GB) equals how many Megabytes (MB)?",
      options: ["100", "512", "1024", "2048"],
      correctAnswer: 2
    },
    {
      question: "Which of these is a spreadsheet application?",
      options: ["MS Excel", "MS Access", "CorelDraw", "PowerPoint"],
      correctAnswer: 0
    },
    {
      question: "A warm boot occurs when you:",
      options: ["Turn on the power switch", "Restart the computer while it's already on", "Install a new CPU", "Change the monitor"],
      correctAnswer: 1
    },
    {
      question: "The BIOS is stored in the:",
      options: ["Hard drive", "RAM", "ROM", "Floppy disk"],
      correctAnswer: 2
    },
    {
      question: "Application software that manages data in tables is:",
      options: ["Word processor", "Database management system (DBMS)", "Web browser", "Mail client"],
      correctAnswer: 1
    }
  ],
  "SSS3 - Data Communication, Networking & Internet": [
    {
      question: "The transmission of data between two points is called:",
      options: ["Computation", "Networking", "Data communication", "Storage"],
      correctAnswer: 2
    },
    {
      question: "A network that connects computers in a single building is a:",
      options: ["WAN", "LAN", "MAN", "PAN"],
      correctAnswer: 1
    },
    {
      question: "WWWW stands for:",
      options: ["World Wide Web", "World Word Web", "Whole Wide World", "Wide Word Web"],
      correctAnswer: 0
    },
    {
      question: "The protocol used to transfer web pages is:",
      options: ["FTP", "HTTP", "SMTP", "TCP"],
      correctAnswer: 1
    },
    {
      question: "A computer that provides services to other computers in a network is a:",
      options: ["Client", "Server", "Hub", "Router"],
      correctAnswer: 1
    },
    {
      question: "The physical layout of a network is called its:",
      options: ["Structure", "Topology", "Map", "Algorithm"],
      correctAnswer: 1
    },
    {
      question: "Which topology connects all computers to a single central cable?",
      options: ["Star", "Bus", "Ring", "Mesh"],
      correctAnswer: 1
    },
    {
      question: "IP stands for:",
      options: ["Internet Provider", "Internet Protocol", "Internal Program", "Instant Page"],
      correctAnswer: 1
    },
    {
      question: "Modem stands for:",
      options: ["Mode and Demand", "Modulator and Demodulator", "Modify and Demo", "Modular Demand"],
      correctAnswer: 1
    },
    {
      question: "A software application used to access the internet is a:",
      options: ["Search engine", "Web browser", "Server", "Domain"],
      correctAnswer: 1
    },
    {
      question: "Google is primarily a:",
      options: ["Web page", "Search engine", "Network cable", "Browser only"],
      correctAnswer: 1
    },
    {
      question: "An example of a storage medium used in networking to store files for users is a:",
      options: ["Switch", "NAS (Network Attached Storage)", "Cable", "Jack"],
      correctAnswer: 1
    },
    {
      question: "Email stands for:",
      options: ["Extra mail", "Electronic mail", "Efficient mail", "Easy mail"],
      correctAnswer: 1
    },
    {
      question: "Transmission using light pulses through glass fibers is:",
      options: ["Coaxial cable", "Fiber optic cable", "Twisted pair", "Radio waves"],
      correctAnswer: 1
    },
    {
      question: "Wi-Fi is a technology for:",
      options: ["Fast wired connection", "Wireless local area networking", "Watching movies only", "Printing"],
      correctAnswer: 1
    },
    {
      question: "A URL is the _________ of a web page.",
      options: ["Language", "Address", "Title", "Picture"],
      correctAnswer: 1
    },
    {
      question: "Phishing is a method of:",
      options: ["Catching real fish", "Deceiving people to steal personal information", "Improving network speed", "Fixing computers"],
      correctAnswer: 1
    },
    {
      question: "The process of encoding information to keep it secure is:",
      options: ["Decryption", "Encryption", "Duplication", "Compression"],
      correctAnswer: 1
    },
    {
      question: "A firewall is used to:",
      options: ["Stop real fires", "Protect a network from unauthorized access", "Increase voltage", "Cool the CPU"],
      correctAnswer: 1
    },
    {
      question: "Cloud computing allows users to store data on:",
      options: ["Removable disks only", "Remote servers via the internet", "The monitor", "Internal ROM"],
      correctAnswer: 1
    }
  ],
  "SSS1 - Values, Citizenship & Human Rights": [
    {
      question: "Values can be defined as:",
      options: ["Laws made by government", "Beliefs and principles that guide behavior", "Money in the bank", "Physical strength"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a positive value?",
      options: ["Dishonesty", "Integrity", "Selfishness", "Laziness"],
      correctAnswer: 1
    },
    {
      question: "A citizen is a legal member of a:",
      options: ["Family", "Club", "State or Country", "School"],
      correctAnswer: 2
    },
    {
      question: "Which of the following is a way of acquiring citizenship?",
      options: ["By force", "By birth", "By theft", "By dreaming"],
      correctAnswer: 1
    },
    {
      question: "Naturalization is the process of acquiring citizenship by a:",
      options: ["Native born child", "Foreigner who meets legal requirements", "Member of parliament", "Criminal"],
      correctAnswer: 1
    },
    {
      question: "Rights that are inherent to all human beings are called:",
      options: ["Legal rights", "Human Rights", "Property rights", "Political rights"],
      correctAnswer: 1
    },
    {
      question: "The UDHR stands for:",
      options: ["United Development Human Rights", "Universal Declaration of Human Rights", "Universal Definition of Higher Rights", "United Democracy Human Rights"],
      correctAnswer: 1
    },
    {
      question: "Which organ of government protects the rights of citizens?",
      options: ["Executive", "Legislature", "Judiciary", "Police only"],
      correctAnswer: 2
    },
    {
      question: "A duty of a citizen is to:",
      options: ["Break laws", "Pay taxes", "Ignore elections", "Destroy public property"],
      correctAnswer: 1
    },
    {
      question: "Self-reliance means:",
      options: ["Depending on others", "Relying on one's own abilities and resources", "Living in the bush", "Not working at all"],
      correctAnswer: 1
    },
    {
      question: "Integrity involves being:",
      options: ["Wealthy", "Honest and having strong moral principles", "Powerful", "Famous"],
      correctAnswer: 1
    },
    {
      question: "The first step in fighting for one's right is:",
      options: ["Fighting in the street", "Knowing one's rights", "Leaving the country", "Joining a cult"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a fundamental human right?",
      options: ["Right to kill", "Right to life", "Right to steal", "Right to cheat"],
      correctAnswer: 1
    },
    {
      question: "Freedom of expression means the right to:",
      options: ["Say anything including lies", "Voice opinions responsibly", "Insult leaders only", "Keep quiet forever"],
      correctAnswer: 1
    },
    {
      question: "Responsible parenthood involves:",
      options: ["Leaving children alone", "Providing for the physical and emotional needs of children", "Working 24 hours a day", "Buying expensive toys only"],
      correctAnswer: 1
    },
    {
      question: "Discipline is important for:",
      options: ["Chaos", "National development and order", "Winning lottery", "Making friends"],
      correctAnswer: 1
    },
    {
      question: "A person with dual citizenship belongs to:",
      options: ["No country", "Two countries", "Ten countries", "His family only"],
      correctAnswer: 1
    },
    {
      question: "Which organization focuses on human rights in Nigeria?",
      options: ["CBN", "National Human Rights Commission (NHRC)", "INEC", "EFCC"],
      correctAnswer: 1
    },
    {
      question: "Civic education aims to produce:",
      options: ["Good soldiers", "Informed and responsible citizens", "Rich people", "Politicians only"],
      correctAnswer: 1
    },
    {
      question: "The foundation of any society's growth is its:",
      options: ["Money", "Values", "Buildings", "Cars"],
      correctAnswer: 1
    }
  ],
  "SSS2 - Democracy, Rule of Law & National Issues": [
    {
      question: "Democracy is often defined as government of the people, by the people and:",
      options: ["For the rich", "For the people", "For the leaders", "For the army"],
      correctAnswer: 1
    },
    {
      question: "Rule of Law means that:",
      options: ["The President is above the law", "Law is supreme and applicable to everyone", "The rich can break laws", "Soldiers make the laws"],
      correctAnswer: 1
    },
    {
      question: "The three pillars of democracy are:",
      options: ["Police, Army, Navy", "Executive, Legislature, Judiciary", "Rich, Poor, Middle class", "Market, Church, Mosque"],
      correctAnswer: 1
    },
    {
      question: "Cultism is a/an _________ activity.",
      options: ["Social", "Secret and antisocial", "Educational", "Religious"],
      correctAnswer: 1
    },
    {
      question: "Drug abuse means:",
      options: ["Using medicine to get well", "Excessive or wrong use of drugs without prescription", "Selling drugs in a pharmacy", "Planting herbs"],
      correctAnswer: 1
    },
    {
      question: "The agency responsible for fighting drug trafficking in Nigeria is:",
      options: ["EFCC", "NDLEA", "ICPC", "Police"],
      correctAnswer: 1
    },
    {
      question: "HIV/AIDS is primarily transmitted through:",
      options: ["Sharing food", "Unprotected sexual contact and infected blood", "Mosquito bites", "Shaking hands"],
      correctAnswer: 1
    },
    {
      question: "Political apathy means:",
      options: ["Love for politics", "Indifference and lack of interest in political activities", "Joining a party", "Voting ten times"],
      correctAnswer: 1
    },
    {
      question: "The act of taking someone for labor or sexual exploitation is:",
      options: ["Migration", "Human trafficking", "Tourism", "Employment"],
      correctAnswer: 1
    },
    {
      question: "NAPTIP was set up to fight:",
      options: ["Corruption", "Human trafficking", "Drug abuse", "Cultism"],
      correctAnswer: 1
    },
    {
      question: "A way to discourage cultism is through:",
      options: ["Joining a bigger group", "Public enlightenment and good parenting", "Buying more weapons", "Closing all schools"],
      correctAnswer: 1
    },
    {
      question: "The supreme law that guides a democratic nation is the:",
      options: ["Holy book", "Constitution", "Decree", "Manifesto"],
      correctAnswer: 1
    },
    {
      question: "Electoral malpractice includes:",
      options: ["Voting once", "Voter intimidation and rigging", "Showing ID card", "Counting votes correctly"],
      correctAnswer: 1
    },
    {
      question: "Fundamental objectives of the state are contained in the:",
      options: ["Daily times", "Constitution", "School rules", "Village laws"],
      correctAnswer: 1
    },
    {
      question: "A characteristic of democracy is:",
      options: ["Periodic free and fair elections", "Life-long presidency", "One-man rule", "Absence of courts"],
      correctAnswer: 0
    },
    {
      question: "Rule of Law ensures:",
      options: ["Justice and fairness", "Chaos", "Dictatorship", "Wealth for all"],
      correctAnswer: 0
    },
    {
      question: "The process of teaching children the values of society is:",
      options: ["Socialization", "Exclusion", "Aggression", "Competition"],
      correctAnswer: 0
    },
    {
      question: "Which of these is a national issue in Nigeria?",
      options: ["Cybercrime (Yahoo-Yahoo)", "Too much rain", "Low temperature", "Lack of space"],
      correctAnswer: 0
    },
    {
      question: "A good leader should be:",
      options: ["Selfish", "Accountable and transparent", "Distant", "Aggressive"],
      correctAnswer: 1
    },
    {
      question: "Public enlightenment is a tool for:",
      options: ["Starting riots", "Creating awareness and solving social problems", "Selling products only", "Confusing people"],
      correctAnswer: 1
    }
  ],
  "SSS3 - Leadership, Civil Society & National Development": [
    {
      question: "Leadership is the ability to:",
      options: ["Scare people", "Influence and guide others toward a goal", "Take all the money", "Stay in power forever"],
      correctAnswer: 1
    },
    {
      question: "Civil society groups are:",
      options: ["Government agencies", "Non-governmental organizations (NGOs) and community groups", "Military units", "Political parties only"],
      correctAnswer: 1
    },
    {
      question: "National development involves improvement in:",
      options: ["Only the capital city", "Economic, social, and political conditions of the whole country", "Only the rulers' wealth", "The weather"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a role of civil society?",
      options: ["Arresting people", "Advocating for rights and monitoring government", "Implementing laws", "Winning elections"],
      correctAnswer: 1
    },
    {
      question: "Popular participation means citizens:",
      options: ["Staying at home", "Taking part in collective decision making and politics", "Ignoring laws", "Watching TV"],
      correctAnswer: 1
    },
    {
      question: "Limitations to national development include:",
      options: ["Quality education", "Corruption and poor infrastructure", "Peace", "Transparency"],
      correctAnswer: 1
    },
    {
      question: "Sustainable development goals (SDGs) aim to:",
      options: ["Help only rich countries", "Eradicate poverty and protect the planet", "Increase debt", "Stop trade"],
      correctAnswer: 1
    },
    {
      question: "Youth empowerment is important for:",
      options: ["Increasing crime", "Economic growth and national stability", "Reducing school time", "Buying cars only"],
      correctAnswer: 1
    },
    {
      question: "The NYSC scheme in Nigeria was set up for:",
      options: ["War", "National integration and service", "Tourism", "Paying students only"],
      correctAnswer: 1
    },
    {
      question: "A characteristic of a good follower is:",
      options: ["Blind obedience", "Constructive criticism and cooperation", "Laziness", "Stupidness"],
      correctAnswer: 1
    },
    {
      question: "Constitutional review is necessary to:",
      options: ["Make it longer", "Adapt the laws to current needs", "Please the president", "Delete all laws"],
      correctAnswer: 1
    },
    {
      question: "Corruption in Nigeria is fought by agencies like:",
      options: ["NPC", "EFCC and ICPC", "NLC", "NBA"],
      correctAnswer: 1
    },
    {
      question: "Human capital development refers to:",
      options: ["Building more jails", "Investment in people's health and education", "Buying robots", "Importing workers"],
      correctAnswer: 1
    },
    {
      question: "A transparent government is one that is:",
      options: ["Secretive", "Open and accountable to the people", "Invisible", "Made of glass"],
      correctAnswer: 1
    },
    {
      question: "Freedom of the press is essential for:",
      options: ["Lying", "Democracy and accountability", "Entertainment only", "Printing money"],
      correctAnswer: 1
    },
    {
      question: "Poverty alleviation programs aim to:",
      options: ["Increase taxes", "Empower low-income earners and reduce hardship", "Help rich firms", "Close markets"],
      correctAnswer: 1
    },
    {
      question: "Which of these is required for national integration?",
      options: ["Tribalism", "Tolerating and respecting diverse cultures", "Religious war", "Close borders"],
      correctAnswer: 1
    },
    {
      question: "The role of the military in a democracy is to:",
      options: ["Rule the country", "Defend the nation from external aggression", "Conduct elections", "Arrest strikers"],
      correctAnswer: 1
    },
    {
      question: "A responsible citizen should contribute to:",
      options: ["Riots", "National security and progress", "Debt", "Chaos"],
      correctAnswer: 1
    },
    {
      question: "Democracy is strengthened when citizens are:",
      options: ["Ignorant", "Educated and active", "Passive", "Aggressive"],
      correctAnswer: 1
    }
  ],
  "SSS1 - Introduction to Agriculture & Land Use": [
    {
      question: "Agriculture is derived from the Latin words 'ager' and 'cultura', meaning:",
      options: ["Man and nature", "Field and cultivation", "Food and water", "Animal and plant"],
      correctAnswer: 1
    },
    {
      question: "The branch of agriculture concerned with the study of crops is:",
      options: ["Animal science", "Agronomy", "Entomology", "Pathology"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a major problem of agriculture in Nigeria?",
      options: ["Too much money", "Inadequate storage and processing facilities", "Small population", "Cold weather"],
      correctAnswer: 1
    },
    {
      question: "The system of land ownership is known as:",
      options: ["Land usage", "Land tenure system", "Land banking", "Land survey"],
      correctAnswer: 1
    },
    {
      question: "Land ownership by inheritance is a feature of:",
      options: ["Leasehold", "Customary tenure", "State ownership", "Rent"],
      correctAnswer: 1
    },
    {
      question: "Subsistence agriculture aims at:",
      options: ["Export only", "Large scale profit", "Feeding the farmer and his family", "Feeding the whole country"],
      correctAnswer: 2
    },
    {
      question: "Commercial agriculture is characterized by:",
      options: ["Use of simple tools", "Large land areas and mechanization", "Small output", "Family labor only"],
      correctAnswer: 1
    },
    {
      question: "The most limiting factor in Nigerian agriculture is:",
      options: ["Labor", "Capital", "Climate", "Seeds"],
      correctAnswer: 1
    },
    {
      question: "Agricultural development can be hindered by:",
      options: ["Good roads", "Lack of credit facilities", "High rainfall", "Fertilizers"],
      correctAnswer: 1
    },
    {
      question: "The Land Use Act in Nigeria was enacted in:",
      options: ["1960", "1978", "1990", "2010"],
      correctAnswer: 1
    },
    {
      question: "Which of these is an example of an industrial crop?",
      options: ["Maize", "Rubber", "Yam", "Tomato"],
      correctAnswer: 1
    },
    {
      question: "Peasant farmers mostly use:",
      options: ["Tractors", "Simple farm tools like hoes and cutlasses", "Airplanes", "Robots"],
      correctAnswer: 1
    },
    {
      question: "The provision of water to crops by artificial means is:",
      options: ["Drainage", "Irrigation", "Mulching", "Pruning"],
      correctAnswer: 1
    },
    {
      question: "Which tool is best for transplanting seedlings?",
      options: ["Rake", "Hand trowel", "Pick axe", "Shovel"],
      correctAnswer: 1
    },
    {
      question: "A farm tool used for leveling the soil surface is a:",
      options: ["Hoe", "Rake", "Spade", "Axe"],
      correctAnswer: 1
    },
    {
      question: "Farm power obtained from animals (e.g. oxen) is:",
      options: ["Mechanical power", "Animal power", "Biophysical power", "Solar power"],
      correctAnswer: 1
    },
    {
      question: "The 'Green Revolution' was an initiative to:",
      options: ["Build more houses", "Increase agricultural production rapidly", "Close all farms", "Paint everything green"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a spice crop?",
      options: ["Rice", "Ginger", "Cassava", "Cotton"],
      correctAnswer: 1
    },
    {
      question: "The major reward for an agricultural entrepreneur is:",
      options: ["Wages", "Profit", "Rent", "Interest"],
      correctAnswer: 1
    },
    {
      question: "Forestry involves the management of:",
      options: ["Fish", "Forests and forest resources", "Birds only", "City parks"],
      correctAnswer: 1
    }
  ],
  "SSS2 - Soil Science & Crop Production": [
    {
      question: "The best soil for most crop cultivation is:",
      options: ["Sandy soil", "Clay soil", "Loamy soil", "Silt"],
      correctAnswer: 2
    },
    {
      question: "Soil texture refers to the:",
      options: ["Arrangement of particles", "Proportion of different sizes of soil particles", "Color of soil", "Weight of soil"],
      correctAnswer: 1
    },
    {
      question: "The removal of the top fertile layer of soil is:",
      options: ["Leaching", "Erosion", "Mulching", "Weathering"],
      correctAnswer: 1
    },
    {
      question: "Plants that belong to the grass family are:",
      options: ["Legumes", "Cereals", "Root crops", "Oil crops"],
      correctAnswer: 1
    },
    {
      question: "An example of a root and tuber crop is:",
      options: ["Maize", "Cassava", "Rice", "Millet"],
      correctAnswer: 1
    },
    {
      question: "Leguminous crops are important because they:",
      options: ["Only provide shade", "Fix nitrogen into the soil", "Destroy pests", "Dry the soil"],
      correctAnswer: 1
    },
    {
      question: "The process of breaking down rocks into soil is:",
      options: ["Sedimentation", "Weathering", "Erosion", "Compaction"],
      correctAnswer: 1
    },
    {
      question: "A symptom of nitrogen deficiency in crops is:",
      options: ["Purple leaves", "Yellowing of leaves (chlorosis)", "Rotting roots", "Dark green color"],
      correctAnswer: 1
    },
    {
      question: "Fertilizers that contain only one nutrient are:",
      options: ["Compound fertilizers", "Straight fertilizers", "Organic manure", "Compost"],
      correctAnswer: 1
    },
    {
      question: "Crop rotation is a system where:",
      options: ["Crops are moved in a circle", "Different crops are grown on the same land in sequence", "Crops are grown forever", "No crops are grown"],
      correctAnswer: 1
    },
    {
      question: "Mulching helps to:",
      options: ["Increase evaporation", "Conserve soil moisture and control weeds", "Kill the crop", "Make soil hard"],
      correctAnswer: 1
    },
    {
      question: "Organic manure made from decomposed plant and animal remains is:",
      options: ["NPK", "Compost", "Urea", "Phosphate"],
      correctAnswer: 1
    },
    {
      question: "The acidity or alkalinity of the soil is measured as:",
      options: ["Soil temperature", "Soil pH", "Soil depth", "Soil air"],
      correctAnswer: 1
    },
    {
      question: "A plant that grows where it is not wanted is a:",
      options: ["Crop", "Weed", "Parasite", "Seedling"],
      correctAnswer: 1
    },
    {
      question: "Biological control of pests involves using:",
      options: ["Chemicals", "Natural enemies/predators", "Fire", "Machines"],
      correctAnswer: 1
    },
    {
      question: "The most common method of propagating cassava is by:",
      options: ["Seeds", "Stem cuttings", "Leaves", "Roots"],
      correctAnswer: 1
    },
    {
      question: "Harvesting of cocoa involves the use of:",
      options: ["Sickle", "Harvesting knife or cutlass", "Combine harvester", "Hands only"],
      correctAnswer: 1
    },
    {
      question: "The process of removing excess water from the soil is:",
      options: ["Irrigation", "Drainage", "Evaporation", "Run-off"],
      correctAnswer: 1
    },
    {
      question: "Macro-nutrients are needed by plants in:",
      options: ["Small quantities", "Large quantities", "No quantities", "Traces only"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a biotic factor affecting agriculture?",
      options: ["Temperature", "Pests and diseases", "Rainfall", "Soil type"],
      correctAnswer: 1
    }
  ],
  "SSS3 - Animal Science & Farm Management": [
    {
      question: "A young female pig is called a:",
      options: ["Sow", "Gilt", "Boar", "Piglet"],
      correctAnswer: 1
    },
    {
      question: "The gestation period of a cow is approximately:",
      options: ["114 days", "283 days", "150 days", "336 days"],
      correctAnswer: 1
    },
    {
      question: "Ruminant animals have a stomach with how many compartments?",
      options: ["One", "Two", "Three", "Four"],
      correctAnswer: 3
    },
    {
      question: "Poultry birds kept specifically for meat production are:",
      options: ["Layers", "Broilers", "Cockerels", "Chicks"],
      correctAnswer: 1
    },
    {
      question: "The process of giving birth in farm animals is:",
      options: ["Lactation", "Parturition", "Gestation", "Ovulation"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a ruminant animal?",
      options: ["Pig", "Goat", "Chicken", "Dog"],
      correctAnswer: 1
    },
    {
      question: "The major source of protein in animal feed is often:",
      options: ["Maize", "Fish meal or Soybean meal", "Grass", "Water"],
      correctAnswer: 1
    },
    {
      question: "A farm record that shows the daily happenings on the farm is a:",
      options: ["Sales record", "Farm diary", "Inventory", "Labor record"],
      correctAnswer: 1
    },
    {
      question: "Farm labor can be categorised into:",
      options: ["Free and Slave", "Skilled and Unskilled", "Tall and Short", "None"],
      correctAnswer: 1
    },
    {
      question: "The removal of the horns of an animal is:",
      options: ["Docking", "Dehorning / Disbudding", "Castration", "Branding"],
      correctAnswer: 1
    },
    {
      question: "Castration of male animals is done to:",
      options: ["Increase aggression", "Prevent indiscriminate mating and increase fatness", "Kill the animal", "Change color"],
      correctAnswer: 1
    },
    {
      question: "Fishery involves the management and harvesting of:",
      options: ["Birds", "Fish and other aquatic animals", "Trees", "Rocks"],
      correctAnswer: 1
    },
    {
      question: "A disease of poultry caused by a virus is:",
      options: ["Coccidiosis", "Newcastle disease", "Anthrax", "Brucellosis"],
      correctAnswer: 1
    },
    {
      question: "The science of bee-keeping is:",
      options: ["Sericulture", "Apiculture", "Floriculture", "Silviculture"],
      correctAnswer: 1
    },
    {
      question: "A farm inventory is a list of:",
      options: ["Only animals", "All assets and properties on the farm", "Only staff", "Debts only"],
      correctAnswer: 1
    },
    {
      question: "Marketable surplus exists when:",
      options: ["There is no food", "Production exceeds consumption", "Farmers are hungry", "Prices are zero"],
      correctAnswer: 1
    },
    {
      question: "Agricultural extension aims to:",
      options: ["Tax farmers", "Pass modern farming information to farmers", "Confuse farmers", "Buy land"],
      correctAnswer: 1
    },
    {
      question: "The most important source of farm power in rural Africa is:",
      options: ["Electricity", "Human labor", "Wind", "Steam"],
      correctAnswer: 1
    },
    {
      question: "A ration containing all essential nutrients in the right proportion is a:",
      options: ["Maintenance ration", "Balanced ration", "Production ration", "Malnourishment"],
      correctAnswer: 1
    },
    {
      question: "Which of these is an example of an endoparasite?",
      options: ["Tick", "Tapeworm", "Louse", "Flea"],
      correctAnswer: 1
    }
  ],
  "JSS - Social Studies Corner": [
    {
      question: "Social Studies is the study of man and his:",
      options: ["Animals", "Environment", "Books", "Clothes"],
      correctAnswer: 1
    },
    {
      question: "The primary agent of socialization is the:",
      options: ["School", "Family", "Church", "Club"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a type of family?",
      options: ["Nuclear and Extended", "Big and Small", "Rich and Poor", "Old and New"],
      correctAnswer: 0
    },
    {
      question: "Culture is defined as the:",
      options: ["Size of a country", "Total way of life of a group of people", "Music only", "Dancing only"],
      correctAnswer: 1
    },
    {
      question: "One way to promote national unity is through:",
      options: ["War", "Tolerating other people's culture", "Tribalism", "Fighting"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a social problem in Nigeria?",
      options: ["Cultism", "Hard work", "Honesty", "Reading"],
      correctAnswer: 0
    },
    {
      question: "Marriage is a legal union between a:",
      options: ["Man and his friends", "Man and a woman", "Boy and girl child", "Teacher and student"],
      correctAnswer: 1
    },
    {
      question: "Traffic rules are meant to ensure:",
      options: ["Speed", "Safety on the road", "Noise", "Confusion"],
      correctAnswer: 1
    },
    {
      question: "The first Nigerian national anthem was 'Nigeria We Hail Thee'. True or False?",
      options: ["True", "False"],
      correctAnswer: 0
    },
    {
      question: "Which of these is a national symbol in Nigeria?",
      options: ["The Flag", "A laptop", "A car", "A house"],
      correctAnswer: 0
    },
    {
      question: "The green color on the Nigerian flag represents:",
      options: ["Peace", "Agriculture/Natural wealth", "War", "Sky"],
      correctAnswer: 1
    },
    {
      question: "Integrity means being:",
      options: ["Cheat", "Honest and truthful", "Rich", "Loud"],
      correctAnswer: 1
    },
    {
      question: "Inter-communal conflicts can lead to:",
      options: ["Development", "Destruction of lives and property", "Happiness", "Wealth"],
      correctAnswer: 1
    },
    {
      question: "A drog addict is someone who:",
      options: ["Sells drugs", "Has a physical or mental dependence on drugs", "Makes drugs", "Cures people"],
      correctAnswer: 1
    },
    {
      question: "The head of a nuclear family is usually the:",
      options: ["Child", "Father", "Grandfather", "Neighbor"],
      correctAnswer: 1
    },
    {
      question: "Co-operation means:",
      options: ["Fighting alone", "Working together for a common goal", "Doing nothing", "Stealing"],
      correctAnswer: 1
    },
    {
      question: "The highest level of education in Nigeria is:",
      options: ["Primary", "Secondary", "Tertiary (University/Polytechnic)", "Nursery"],
      correctAnswer: 2
    },
    {
      question: "Citizenship can be lost if a person:",
      options: ["Leaves town", "Is found guilty of treason", "Changes job", "Reads a book"],
      correctAnswer: 1
    },
    {
      question: "Democracy is government of the people, by the people and:",
      options: ["For the rich", "For the people", "For the king", "For the army"],
      correctAnswer: 1
    },
    {
      question: "One benefit of living together in peace is:",
      options: ["War", "Progress and development", "Hatred", "Insecurity"],
      correctAnswer: 1
    }
  ],
  "JSS - Home Economics Hub": [
    {
      question: "Home Economics is a field of study that deals with:",
      options: ["Building houses", "Improving family life and living conditions", "Selling cars", "Farming only"],
      correctAnswer: 1
    },
    {
      question: "Hygiene is the study and practice of:",
      options: ["Cooking", "Cleanliness and good health", "Sewing", "Dancing"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a basic unit of a family?",
      options: ["The Home", "The School", "The Market", "The Shop"],
      correctAnswer: 0
    },
    {
      question: "A balanced diet contains all:",
      options: ["Sugars", "Types of meat", "Necessary nutrients in right proportions", "Fruits"],
      correctAnswer: 2
    },
    {
      question: "The building blocks of the body are:",
      options: ["Carbohydrates", "Proteins", "Fats", "Minerals"],
      correctAnswer: 1
    },
    {
      question: "An example of a carbohydrate food is:",
      options: ["Fish", "Egg", "Rice", "Meat"],
      correctAnswer: 2
    },
    {
      question: "Which vitamin is mostly found in citrus fruits like oranges?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      correctAnswer: 2
    },
    {
      question: "Puberty is the period of:",
      options: ["Marriage", "Physical growth and sexual maturity", "First day at school", "Old age"],
      correctAnswer: 1
    },
    {
      question: "A tool used for sewing by hand is a:",
      options: ["Fork", "Needle", "Spanner", "Hammer"],
      correctAnswer: 1
    },
    {
      question: "What is 'First Aid'?",
      options: ["Final treatment in hospital", "Immediate help given to an injured person", "Calling the police", "Running away"],
      correctAnswer: 1
    },
    {
      question: "Consumer education helps us to:",
      options: ["Spend money wastefully", "Make wise choices when buying goods", "Steal goods", "Close all shops"],
      correctAnswer: 1
    },
    {
      question: "The kitchen is used for:",
      options: ["Sleeping", "Cooking and food preparation", "Bathing", "Studying"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a cleaning agent?",
      options: ["Oil", "Soap/Detergent", "Salt", "Sugar"],
      correctAnswer: 1
    },
    {
      question: "A 'Stain' is a/an _________ mark on a fabric.",
      options: ["Beautiful", "Unwanted/Accidental", "Intentional", "Permanent only"],
      correctAnswer: 1
    },
    {
      question: "The process of removing dirt from clothes using water and soap is:",
      options: ["Ironing", "Laundering (Washing)", "Folding", "Drying"],
      correctAnswer: 1
    },
    {
      question: "Food spoilage can be prevented by:",
      options: ["Leaving it in the sun", "Preservation (e.g. freezing, drying)", "Touching it with dirty hands", "Hiding it"],
      correctAnswer: 1
    },
    {
      question: "A good home should have:",
      options: ["Proper ventilation and light", "No windows", "Many rats", "Dusty floors"],
      correctAnswer: 0
    },
    {
      question: "The three meals of the day are Breakfast, Lunch and:",
      options: ["Snack", "Dinner/Supper", "Drink", "Fruit"],
      correctAnswer: 1
    },
    {
      question: "Ironing helps to remove _________ from clothes.",
      options: ["Dirt", "Wrinkles / Creases", "Buttons", "Color"],
      correctAnswer: 1
    },
    {
      question: "The study of the needs of a baby is:",
      options: ["Adult care", "Child care", "Old age care", "Animal care"],
      correctAnswer: 1
    }
  ],
  "JSS - Business Studies Zone": [
    {
      question: "Business Studies involves the study of:",
      options: ["Animals", "Office practice, Commerce and Accountancy", "Star constellations", "Plants"],
      correctAnswer: 1
    },
    {
      question: "A person who starts and manage a business is an:",
      options: ["Employee", "Entrepreneur", "Clerk", "Student"],
      correctAnswer: 1
    },
    {
      question: "The place where clerical and administrative work is done is the:",
      options: ["Market", "Office", "Field", "Street"],
      correctAnswer: 1
    },
    {
      question: "Which of these is an office equipment?",
      options: ["Tractor", "Photocopier", "Hoe", "Stethoscope"],
      correctAnswer: 1
    },
    {
      question: "Commerce is the study of:",
      options: ["Singing", "Trade and aids to trade", "Farming", "War"],
      correctAnswer: 1
    },
    {
      question: "An example of an 'Aid to Trade' is:",
      options: ["Sleeping", "Transportation / Banking", "Eating", "Running"],
      correctAnswer: 1
    },
    {
      question: "Book-keeping is the _________ of financial transactions.",
      options: ["Deletion", "Systematic recording", "Ignoring", "Singing"],
      correctAnswer: 1
    },
    {
      question: "The 'Double Entry' principle states that every transaction has a:",
      options: ["Single side", "Debit and Credit side", "No side", "Three sides"],
      correctAnswer: 1
    },
    {
      question: "The reward for Labor is:",
      options: ["Profit", "Wages/Salaries", "Rent", "Interest"],
      correctAnswer: 1
    },
    {
      question: "A 'Sole Trader' is a business owned by:",
      options: ["Ten people", "One person", "The government", "All citizens"],
      correctAnswer: 1
    },
    {
      question: "Advertising is used to:",
      options: ["Hide products", "Inform and persuade people to buy products", "Increase prices secretly", "Stop sales"],
      correctAnswer: 1
    },
    {
      question: "Insurance helps to:",
      options: ["Make money", "Cover risks and provide compensation for losses", "Stop fire", "Build roads"],
      correctAnswer: 1
    },
    {
      question: "Consumer rights include the right to:",
      options: ["Steal", "Safety and information", "Break things", "Not pay"],
      correctAnswer: 1
    },
    {
      question: "In accounting, 'Assets' are things:",
      options: ["The business owes", "The business owns", "The business sold", "The staff eat"],
      correctAnswer: 1
    },
    {
      question: "Liability is what a business:",
      options: ["Owns", "Owes to others", "Does well", "Likes"],
      correctAnswer: 1
    },
    {
      question: "A 'Trial Balance' is used to check the _________ of accounts.",
      options: ["Color", "Arithmetical accuracy", "Size", "Font"],
      correctAnswer: 1
    },
    {
      question: "Which of these is a function of money?",
      options: ["Medium of exchange", "Being heavy", "Being green", "Getting lost"],
      correctAnswer: 0
    },
    {
      question: "Effective communication involves a:",
      options: ["Sender only", "Sender, Message, and Receiver", "Noise only", "Wall"],
      correctAnswer: 1
    },
    {
      question: "The shortcut for 'Save' in many applications is:",
      options: ["Ctrl+C", "Ctrl+S", "Ctrl+V", "Ctrl+X"],
      correctAnswer: 1
    },
    {
      question: "Consumer protection agencies like CPC aim to:",
      options: ["Arrest sellers", "Protect consumers from unfair practices", "Tax buyers", "Close markets"],
      correctAnswer: 1
    }
  ]
};

if (typeof module !== 'undefined') {
  module.exports = quizData;
}

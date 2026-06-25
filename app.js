// ==========================================================================
// Questionnaire Data Definition (Full 45 questions, 10 categories)
// ==========================================================================

const categories = [
    {
        id: "personal",
        name: "פרטים אישיים",
        description: "נתחיל בכמה פרטים אישיים בסיסיים כדי להכיר אתכם טוב יותר."
    },
    {
        id: "self_connection",
        name: "הקשר שלי עם עצמי",
        description: "חלק זה מתמקד בעולמך הפנימי, בהיסטוריה הטיפולית ובמצבך הפיזי והנפשי."
    },
    {
        id: "in_relationship",
        name: "אני בתוך הקשר",
        description: "כאן נבחן את החוויות, המצבים הרגשיים והצרכים שלך בתוך מערכת היחסים הזוגית."
    },
    {
        id: "meeting_partner",
        name: "איך אני פוגש/ת את בן או בת הזוג שלי",
        description: "בחלק זה נתבונן בדינמיקה הזוגית, בראיית האחר ובאופן שבו אתם פוגשים זה את זה."
    },
    {
        id: "when_hard",
        name: "מה קורה לי כשנהיה קשה",
        description: "חלק זה מתמודד עם דפוסי התגובה וההתנהגות שלכם במצבי קונפליקט, מתח או משבר זוגי."
    },
    {
        id: "intimacy_sexuality",
        name: "אינטימיות, קרבה ומיניות",
        description: "כאן נדון בפתיחות, ברמת שביעות הרצון ובשאיפות שלכם בנושא קרבה, אינטימיות ומיניות בקשר."
    },
    {
        id: "where_grow",
        name: "לאן אני רוצה לצמוח",
        description: "חלק זה מוקדש להתבוננות על השלבים הבאים של הקשר, על שאיפות הצמיחה ועל פחדי השינוי."
    },
    {
        id: "dream_vs_reality",
        name: "בין החלום למציאות",
        description: "כאן נבחן את הפערים בין החזון הזוגי שלכם לבין המציאות היומיומית בפועל."
    },
    {
        id: "my_story",
        name: "הסיפור שממנו באתי",
        description: "חלק זה מוקדש לרקע המשפחתי, לילדות ולחוויות המעצבות שממשיכות להשפיע עליך כיום."
    },
    {
        id: "conclusion",
        name: "לסיום",
        description: "כמה שאלות מסכמות שיעזרו לנו למקד את מטרות התהליך הזוגי המשותף."
    }
];

const questions = [
    // קטגוריה 1: פרטים אישיים
    {
        id: "q1",
        category: "personal",
        text: "1. שם מלא",
        type: "text",
        placeholder: "הקלד/י שם מלא"
    },
    {
        id: "q2",
        category: "personal",
        text: "2. גיל",
        type: "number",
        placeholder: "הקלד/י את גילך"
    },
    {
        id: "q3",
        category: "personal",
        text: "3. תחום עיסוק",
        type: "text",
        placeholder: "הקלד/י תחום עיסוק"
    },
    {
        id: "q4",
        category: "personal",
        text: "4. שמות הילדים וגילאיהם, אם יש",
        type: "textarea",
        placeholder: "למשל: יובל בן 5, נועה בת 2. במידה ואין, ניתן לכתוב 'אין' או לדלג."
    },
    
    // קטגוריה 2: הקשר שלי עם עצמי
    {
        id: "q5",
        category: "self_connection",
        text: "5. אילו טיפולים עברת בעבר ומה היו הסיבות לפנייה לטיפול",
        type: "textarea",
        placeholder: "פרט/י כאן על טיפול פסיכולוגי, זוגי, קבוצתי או אחר..."
    },
    {
        id: "q6",
        category: "self_connection",
        text: "6. האם היה או יש בחייך שימוש בחומרים משני תודעה? אם כן, אילו",
        type: "yes-no",
        followUpText: "אילו חומרים ובאיזו תדירות?"
    },
    {
        id: "q7",
        category: "self_connection",
        text: "7. האם היו או יש בחייך דפוסי התמכרות? אם כן, אילו",
        type: "yes-no",
        followUpText: "פרט/י על דפוסי ההתמכרות (למשל מסכים, הימורים, עבודה, אלכוהול וכד'):"
    },
    {
        id: "q8",
        category: "self_connection",
        text: "8. האם את/ה נוטל/ת כיום או נטלת בעבר תרופות פסיכיאטריות",
        type: "yes-no",
        followUpText: "אילו תרופות, מתי ועבור מה?"
    },
    {
        id: "q9",
        category: "self_connection",
        text: "9. האם יש מצב רפואי, פיזי או נפשי, שחשוב לי להכיר",
        type: "yes-no",
        followUpText: "פרט/י בקצרה:"
    },
    {
        id: "q10",
        category: "self_connection",
        text: "10. האם עברת אבחון פסיכולוגי או פסיכיאטרי? אם כן, מה משמעותו עבורך",
        type: "yes-no",
        followUpText: "מה היה האבחון וכיצד את/ה תופס/ת אותו כיום?"
    },
    
    // קטגוריה 3: אני בתוך הקשר
    {
        id: "q11",
        category: "in_relationship",
        text: "11. מהו המצב הרגשי שאת/ה פוגש/ת בתוכך רוב הזמן",
        type: "textarea",
        placeholder: "למשל: רוגע, מתח, דאגה, שמחה, בדידות, תסכול..."
    },
    {
        id: "q12",
        category: "in_relationship",
        text: "12. אילו מצבים מערערים את תחושת היציבות הפנימית שלך",
        type: "textarea",
        placeholder: "אילו טריגרים או אירועים מוציאים אותך מאיזון?"
    },
    {
        id: "q13",
        category: "in_relationship",
        text: "13. מה עוזר לך לחזור לאיזון לאחר הצפה רגשית",
        type: "textarea",
        placeholder: "למשל: פסק זמן, נשימות, ספורט, שיחה, חיבוק..."
    },
    {
        id: "q14",
        category: "in_relationship",
        text: "14. אילו גבולות קל לך לשמור, ואילו גבולות מאתגרים אותך",
        type: "textarea",
        placeholder: "גבולות מול בן הזוג, מול משפחה, עבודה, ילדים, או מול עצמך..."
    },
    {
        id: "q15",
        category: "in_relationship",
        text: "15. איזה צורך אישי מרגיש לך שאינו מקבל מענה מספק לאורך זמן",
        type: "textarea",
        placeholder: "למשל: צורך בחיבור, עצמאות, הערכה, אינטימיות, חופש..."
    },
    
    // קטגוריה 4: איך אני פוגש/ת את בן או בת הזוג שלי
    {
        id: "q16",
        category: "meeting_partner",
        text: "16. איך את/ה מזהה שבן או בת הזוג זקוקים לך, גם בלי לומר זאת במילים",
        type: "textarea",
        placeholder: "מבט, שפת גוף, שינוי טונציה, הסתגרות..."
    },
    {
        id: "q17",
        category: "meeting_partner",
        text: "17. מה לדעתך בן או בת הזוג זקוקים ממך יותר מכל, ומה מקשה עליך לתת זאת",
        type: "textarea",
        placeholder: "הקשבה, תמיכה, ביטחון, תשומת לב... ומה חוסם אותך מלהעניק זאת?"
    },
    {
        id: "q18",
        category: "meeting_partner",
        text: "18. מה מקשה עליך לראות את נקודת המבט של הצד השני בזמן מחלוקת",
        type: "textarea",
        placeholder: "למשל: הרגשת איום, צורך להצדיק את עצמי, פגיעות, רגשנות..."
    },
    {
        id: "q19",
        category: "meeting_partner",
        text: "19. איך את/ה מרגיש/ה ומתנהג/ת כשאת/ה חווה שלא מתחשבים בך",
        type: "textarea",
        placeholder: "מהם הרגשות שעולים והאם את/ה נוטה להגיב בכעס, הסתגרות, פנקסנות..."
    },
    {
        id: "q20",
        category: "meeting_partner",
        text: "20. איזה דפוס חוזר שלך מקשה על יצירת קרבה ויציבות בקשר",
        type: "textarea",
        placeholder: "דינמיקת רודף-נמנע, ויכוחים על אותם נושאים, ריחוק זמני..."
    },
    
    // קטגוריה 5: מה קורה לי כשנהיה קשה
    {
        id: "q21",
        category: "when_hard",
        text: "21. מה קורה בגוף שלך כשיש מתח, ריחוק או עימות",
        type: "textarea",
        placeholder: "למשל: כיווץ בבטן, קוצר נשימה, דופק מהיר, רעד..."
    },
    {
        id: "q22",
        category: "when_hard",
        text: "22. מהי התגובה האוטומטית שלך כשבן או בת הזוג מתרחקים ממך (לדוגמה: התקרבות, התרחקות, קיפאון או התפרצות)",
        type: "textarea",
        placeholder: "הסבר/י כיצד את/ה מגיב/ה בדרך כלל באופן אינסטינקטיבי לדפוס הריחוק שלהם..."
    },
    {
        id: "q23",
        category: "when_hard",
        text: "23. מה את/ה נוטה לעשות כשדברים אינם מתפתחים כפי שקיווית",
        type: "textarea",
        placeholder: "למשל: אכזבה, כעס, ניסיון לתקן בכוח, ייאוש, כניעה..."
    },
    {
        id: "q24",
        category: "when_hard",
        text: "24. על איזה צורך רגשי חשוב לך להגן בזמן ויכוח או קונפליקט",
        type: "textarea",
        placeholder: "למשל: הצורך להישמע, הצורך לקבל אישור, הצורך להרגיש בטוח/ה, הצורך בצדק..."
    },
    {
        id: "q25",
        category: "when_hard",
        text: "25. מה עוזר לך להירגע ולחזור לקרבה אחרי רגע טעון",
        type: "textarea",
        placeholder: "למשל: מילת הרגעה, חיבוק, פסק זמן לעצמי, הומור..."
    },
    
    // קטגוריה 6: אינטימיות, קרבה ומיניות
    {
        id: "q26",
        category: "intimacy_sexuality",
        text: "26. עד כמה את/ה מרגיש/ה בנוח לדבר על מיניות עם בן או בת הזוג",
        type: "scale",
        minLabel: "לא בנוח בכלל",
        maxLabel: "בנוח מאוד"
    },
    {
        id: "q27",
        category: "intimacy_sexuality",
        text: "27. מה עוזר לך להרגיש קרבה, חיבור ואינטימיות בקשר",
        type: "textarea",
        placeholder: "למשל: שיחות עומק, בילוי זוגי שקט, מגע פיזי, מחווה רומנטית..."
    },
    {
        id: "q28",
        category: "intimacy_sexuality",
        text: "28. האם יש נושאים הקשורים למיניות או לאינטימיות שקשה לך לדבר עליהם? אם כן, אילו",
        type: "yes-no",
        followUpText: "אילו נושאים קשה לך לפתוח?"
    },
    {
        id: "q29",
        category: "intimacy_sexuality",
        text: "29. עד כמה את/ה מרוצה כיום מהקרבה, האינטימיות והמיניות בזוגיות שלכם",
        type: "scale",
        minLabel: "לא מרוצה בכלל",
        maxLabel: "מרוצה מאוד"
    },
    {
        id: "q30",
        category: "intimacy_sexuality",
        text: "30. האם יש פער בין מה שאת/ה רוצה או צריך/ה בתחום האינטימיות והמיניות לבין מה שקיים כיום? אם כן, כיצד הוא בא לידי ביטוי",
        type: "yes-no",
        followUpText: "כיצד הפער בא לידי ביטוי?"
    },
    {
        id: "q31",
        category: "intimacy_sexuality",
        text: "31. מה היית רוצה שיקרה או ישתנה בתחום האינטימיות והמיניות במהלך התהליך",
        type: "textarea",
        placeholder: "מהם הציפיות והרצונות שלך בתחומים אלו?"
    },
    {
        id: "q32",
        category: "intimacy_sexuality",
        text: "32. האם את/ה מרגיש/ה מוכן/ה לחקור ולפתוח במהלך התהליך גם נושאים הקשורים למיניות ולאינטימיות, ככל שיהיו רלוונטיים לקשר שלכם",
        type: "yes-no",
        followUpText: "הערות/פירוט נוסף:"
    },
    
    // קטגוריה 7: לאן אני רוצה לצמוח
    {
        id: "q33",
        category: "where_grow",
        text: "33. מה הזוגיות הנוכחית מלמדת אותך על עצמך",
        type: "textarea",
        placeholder: "אילו תכונות, נקודות חוזק או חולשה גילית על עצמך דרך הקשר?"
    },
    {
        id: "q34",
        category: "where_grow",
        text: "34. אילו שינויים את/ה יודע/ת שנחוצים לך, אך עדיין חושש/ת לעשות",
        type: "textarea",
        placeholder: "מהם החסמים או הפחדים שמונעים ממך לעשות את השינוי הזה?"
    },
    {
        id: "q35",
        category: "where_grow",
        text: "35. מה ירגיש לך כהתקדמות משמעותית במהלך התהליך",
        type: "textarea",
        placeholder: "מהן הציפיות או אבני הדרך להצלחה בעיניך?"
    },
    {
        id: "q36",
        category: "where_grow",
        text: "36. מה היית רוצה להביא לקשר בשלב הזה של חייך",
        type: "textarea",
        placeholder: "אילו איכויות, אנרגיות או מיומנויות היית רוצה להכניס לקשר?"
    },
    {
        id: "q37",
        category: "where_grow",
        text: "37. איך ידעת בעבר שהקשר מתקדם, ואיך את/ה מזהה התקדמות כיום",
        type: "textarea",
        placeholder: "מהם המדדים הפנימיים או החיצוניים שלך להתפתחות זוגית?"
    },
    
    // קטגוריה 8: בין החלום למציאות
    {
        id: "q38",
        category: "dream_vs_reality",
        text: "38. איך היית רוצה שהזוגיות שלך תיראה, ואיך היא נראית כיום בפועל",
        type: "textarea",
        placeholder: "תאר/י את הפער שאת/ה חווה בין החלום או החזון לבין השגרה היומיומית..."
    },
    {
        id: "q39",
        category: "dream_vs_reality",
        text: "39. מה את/ה מבטיח/ה לעצמך בקשר, אך מתקשה ליישם לאורך זמן",
        type: "textarea",
        placeholder: "אילו הבטחות או החלטות פנימיות מתמוססות שוב ושוב בשגרה?"
    },
    
    // קטגוריה 9: הסיפור שממנו באתי
    {
        id: "q40",
        category: "my_story",
        text: "40. ספר/י על הבית שבו גדלת ועל התחושות המרכזיות שחווית בו",
        type: "textarea",
        placeholder: "האם שרר בו ביטחון, שקט, ביקורתיות, חום, מתח, ריחוק..."
    },
    {
        id: "q41",
        category: "my_story",
        text: "41. איזו זוגיות ראית בבית הוריך או אצל הדמויות שגידלו אותך",
        type: "textarea",
        placeholder: "איזה מודל של זוגיות, פתרון קונפליקטים ותקשורת ספגת בילדותך?"
    },
    {
        id: "q42",
        category: "my_story",
        text: "42. האם הייתה בחייך חוויה משמעותית, מטלטלת או מעצבת, שממשיכה להשפיע עליך גם כיום",
        type: "textarea",
        placeholder: "למשל אובדן, פרידה, טראומה, משבר בריאותי או אישי..."
    },
    
    // קטגוריה 10: לסיום
    {
        id: "q43",
        category: "conclusion",
        text: "43. מה חשוב לך שאדע עליך ולא נשאל בשאלון",
        type: "textarea",
        placeholder: "כל פרט, מחשבה או תחושה שתרצה/י להוסיף..."
    },
    {
        id: "q44",
        category: "conclusion",
        text: "44. מה גרם לך לפנות דווקא עכשיו לתהליך זוגי",
        type: "textarea",
        placeholder: "מה היה הקש ששבר את גב הגמל, או הטריגר להחלטה לפנות לטיפול כעת?"
    },
    {
        id: "q45",
        category: "conclusion",
        text: "45. אילו תקוות יש לך מהתהליך המשותף שלנו",
        type: "textarea",
        placeholder: "מה ייחשב עבורך כתוצאה טובה ומקשבת בסוף הדרך?"
    }
];

// ==========================================================================
// Application State & Navigation Steps Setup
// ==========================================================================

let steps = [];
let currentStepIndex = -1; // -1 represents welcome screen
let maxVisitedStep = -1;
let lastActiveStepIndex = 0;
let answers = {};
let saveTimeout = null;
let countdownInterval = null;

// Build the steps dynamically
function initializeSteps() {
    steps = [];
    categories.forEach(cat => {
        // Add Category transition step
        steps.push({
            type: 'transition',
            category: cat
        });
        
        // Add all questions for this category
        const catQuestions = questions.filter(q => q.category === cat.id);
        catQuestions.forEach(q => {
            steps.push({
                type: 'question',
                question: q
            });
        });
    });
}

// ==========================================================================
// LocalStorage Persistence (48h Expiration)
// ==========================================================================

const STORAGE_KEY = 'couple_questionnaire_data';
const EXPIRY_TIME_MS = 48 * 60 * 60 * 1000; // 48 Hours

function saveToLocalStorage() {
    const timestamp = Date.now();
    const dataToSave = {
        timestamp: timestamp,
        maxVisitedStep: maxVisitedStep,
        answers: answers
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataToSave));
    showAutosaveStatus('saved', timestamp);
}

function loadFromLocalStorage() {
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (!rawData) {
        showAutosaveStatus('empty');
        return;
    }
    
    try {
        const parsed = JSON.parse(rawData);
        
        // Check 48h expiration
        const now = Date.now();
        if (now - parsed.timestamp > EXPIRY_TIME_MS) {
            console.log("Saved answers expired (older than 48 hours). Clearing memory.");
            localStorage.removeItem(STORAGE_KEY);
            answers = {};
            maxVisitedStep = -1;
            currentStepIndex = -1;
            alert("שאלון טיוטה קודם שהיה שמור בדפדפן נמחק מאחר ועברו 48 שעות.");
            showAutosaveStatus('empty');
            return;
        }
        
        // Load data
        answers = parsed.answers || {};
        maxVisitedStep = parsed.maxVisitedStep || -1;
        
        // Resume at the last visited step if we were in the middle
        if (maxVisitedStep > -1) {
            currentStepIndex = maxVisitedStep;
            lastActiveStepIndex = maxVisitedStep;
        }
        
        // Start countdown
        showAutosaveStatus('saved', parsed.timestamp);
    } catch (e) {
        console.error("Error loading questionnaire from localStorage:", e);
        showAutosaveStatus('empty');
    }
}

function clearLocalStorage() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    localStorage.removeItem(STORAGE_KEY);
    answers = {};
    maxVisitedStep = -1;
    currentStepIndex = -1;
    lastActiveStepIndex = 0;
    showAutosaveStatus('empty');
}

function triggerAutosave() {
    showAutosaveStatus('saving');
    if (saveTimeout) clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        saveToLocalStorage();
    }, 1000); // Debounce save by 1s
}

// Helper to check if there is at least one non-empty answer in the questionnaire
function hasSavedData() {
    return Object.values(answers).some(val => {
        if (val === undefined || val === null || val === '') return false;
        if (typeof val === 'object') {
            return val.choice !== undefined && val.choice !== '';
        }
        return true;
    });
}

function showAutosaveStatus(state, timestamp = null) {
    const indicator = document.getElementById('autosaveStatus');
    const resetBtn = document.getElementById('resetBtn');
    if (!indicator) return;
    const text = indicator.querySelector('.status-text');
    const dot = indicator.querySelector('.pulse-dot');
    const timerText = document.getElementById('statusTimer');
    
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
    
    const hasData = hasSavedData();
    
    // Toggle Reset Button visibility in the header
    if (resetBtn) {
        resetBtn.style.display = hasData ? 'inline-flex' : 'none';
    }
    
    if (state === 'saving') {
        indicator.style.display = 'flex';
        indicator.style.backgroundColor = 'var(--accent-light)';
        indicator.style.color = 'var(--accent-color)';
        dot.style.backgroundColor = 'var(--accent-color)';
        dot.style.display = 'inline-block';
        text.innerText = 'שומר...';
        if (timerText) timerText.style.display = 'none';
    } 
    else if (state === 'empty' || !hasData) {
        indicator.style.display = 'none';
    }
    else if (state === 'saved') {
        indicator.style.display = 'flex';
        indicator.style.backgroundColor = 'var(--sage-light)';
        indicator.style.color = 'var(--sage-color)';
        dot.style.backgroundColor = 'var(--sage-color)';
        dot.style.display = 'inline-block';
        text.innerText = 'נשמר מקומית';
        
        if (timestamp && timerText) {
            timerText.style.display = 'block';
            const updateCountdown = () => {
                const now = Date.now();
                const timeLeftMs = (timestamp + EXPIRY_TIME_MS) - now;
                
                if (timeLeftMs <= 0) {
                    clearInterval(countdownInterval);
                    countdownInterval = null;
                    localStorage.removeItem(STORAGE_KEY);
                    answers = {};
                    maxVisitedStep = -1;
                    currentStepIndex = -1;
                    renderStep();
                    renderSidebar();
                    showAutosaveStatus('empty');
                    alert("פג תוקף שמירת השאלון (עברו 48 שעות). השאלון אופס.");
                } else {
                    const hours = Math.floor(timeLeftMs / (1000 * 60 * 60));
                    const minutes = Math.floor((timeLeftMs % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeLeftMs % (1000 * 60)) / 1000);
                    
                    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                    timerText.innerText = `המידע ימחק בעוד ${formattedTime}`;
                }
            };
            
            updateCountdown();
            countdownInterval = setInterval(updateCountdown, 1000);
        } else {
            if (timerText) timerText.style.display = 'none';
        }
    }
}

// ==========================================================================
// Step Navigation Core Logic
// ==========================================================================

function isStepUnlocked(index) {
    return index <= maxVisitedStep + 1;
}

function navigateTo(index, isSkip = false) {
    if (index < -2 || index > steps.length) return;
    
    if (isSkip) {
        const step = steps[currentStepIndex];
        if (step && step.type === 'question') {
            answers[step.question.id] = '';
        }
    } else {
        saveCurrentStepAnswer();
    }
    
    if (currentStepIndex >= 0 && currentStepIndex <= steps.length) {
        lastActiveStepIndex = currentStepIndex;
    }
    
    currentStepIndex = index;
    
    if (currentStepIndex > maxVisitedStep) {
        maxVisitedStep = currentStepIndex;
    }
    
    renderStep();
    renderSidebar();
    
    triggerAutosave();
    
    document.querySelector('.content-viewport').scrollTop = 0;
}

function saveCurrentStepAnswer() {
    if (currentStepIndex < 0 || currentStepIndex >= steps.length) return;
    
    const currentStep = steps[currentStepIndex];
    if (currentStep.type !== 'question') return;
    
    const q = currentStep.question;
    
    if (q.type === 'text' || q.type === 'number') {
        const input = document.getElementById(`input-${q.id}`);
        if (input) {
            answers[q.id] = input.value.trim();
        }
    } else if (q.type === 'textarea') {
        const textarea = document.getElementById(`textarea-${q.id}`);
        if (textarea) {
            answers[q.id] = textarea.value.trim();
        }
    } else if (q.type === 'yes-no') {
        const selectedBtn = document.querySelector('.yes-no-card.selected');
        const choice = selectedBtn ? selectedBtn.getAttribute('data-choice') : '';
        const detailsInput = document.getElementById('detailsInput');
        const details = detailsInput ? detailsInput.value.trim() : '';
        
        if (choice) {
            answers[q.id] = {
                choice: choice,
                details: choice === 'yes' ? details : ''
            };
        } else {
            answers[q.id] = '';
        }
    } else if (q.type === 'scale') {
        const selectedDot = document.querySelector('.scale-dot.selected');
        const value = selectedDot ? parseInt(selectedDot.getAttribute('data-value')) : '';
        if (value) {
            answers[q.id] = value;
        } else {
            answers[q.id] = '';
        }
    }
}

// ==========================================================================
// Rendering Elements & Templates
// ==========================================================================

function renderStep() {
    const welcomeCard = document.getElementById('welcomeScreen');
    const infoCard = document.getElementById('infoScreen');
    const transitionCard = document.getElementById('categoryTransitionScreen');
    const questionCard = document.getElementById('questionCard');
    const summaryScreen = document.getElementById('summaryScreen');
    const appSidebar = document.getElementById('appSidebar');
    
    welcomeCard.classList.remove('active');
    if (infoCard) infoCard.classList.remove('active');
    transitionCard.classList.remove('active');
    questionCard.classList.remove('active');
    summaryScreen.classList.remove('active');
    
    if (currentStepIndex === -1) {
        welcomeCard.classList.add('active');
        appSidebar.style.opacity = '0.3';
        appSidebar.style.pointerEvents = 'none';
        return;
    }
    
    if (currentStepIndex === -2) {
        if (infoCard) infoCard.classList.add('active');
        appSidebar.style.opacity = '0.3';
        appSidebar.style.pointerEvents = 'none';
        
        // Dynamically update confirmStartBtn text based on whether the questionnaire has started
        const confirmStartBtn = document.getElementById('confirmStartBtn');
        if (confirmStartBtn) {
            const btnText = confirmStartBtn.querySelector('span');
            if (btnText) {
                if (maxVisitedStep >= 0) {
                    btnText.innerText = 'חזור למילוי השאלון';
                } else {
                    btnText.innerText = 'הבנתי, בואו נתחיל';
                }
            }
        }
        return;
    }
    
    appSidebar.style.opacity = '1';
    appSidebar.style.pointerEvents = 'auto';
    
    if (currentStepIndex === steps.length) {
        summaryScreen.classList.add('active');
        generateSummaryHTML();
        return;
    }
    
    const step = steps[currentStepIndex];
    
    if (step.type === 'transition') {
        transitionCard.classList.add('active');
        document.getElementById('transitionCategoryName').innerText = step.category.name;
        document.getElementById('transitionCategoryDesc').innerText = step.category.description;
    } 
    else if (step.type === 'question') {
        questionCard.classList.add('active');
        
        const q = step.question;
        const cat = categories.find(c => c.id === q.category);
        
        document.getElementById('qCategory').innerText = cat.name;
        
        const qIndex = questions.indexOf(q) + 1;
        document.getElementById('qNumber').innerText = `שאלה ${qIndex} מתוך ${questions.length}`;
        
        const progressPercentage = (qIndex / questions.length) * 100;
        document.getElementById('progressBarFill').style.width = `${progressPercentage}%`;
        
        document.getElementById('qText').innerText = q.text;
        
        const qInputArea = document.getElementById('qInputArea');
        qInputArea.innerHTML = '';
        
        const prevAnswer = answers[q.id];
        
        if (q.type === 'text') {
            qInputArea.innerHTML = `
                <div class="input-group">
                    <input type="text" class="form-control" id="input-${q.id}" placeholder="${q.placeholder || ''}" value="${prevAnswer || ''}">
                </div>
            `;
            document.getElementById(`input-${q.id}`).addEventListener('keypress', (e) => {
                if (e.key === 'Enter') navigateTo(currentStepIndex + 1);
            });
        } 
        else if (q.type === 'number') {
            qInputArea.innerHTML = `
                <div class="input-group">
                    <input type="number" class="form-control" id="input-${q.id}" placeholder="${q.placeholder || ''}" value="${prevAnswer || ''}">
                </div>
            `;
            document.getElementById(`input-${q.id}`).addEventListener('keypress', (e) => {
                if (e.key === 'Enter') navigateTo(currentStepIndex + 1);
            });
        } 
        else if (q.type === 'textarea') {
            qInputArea.innerHTML = `
                <div class="input-group">
                    <textarea class="form-control" id="textarea-${q.id}" placeholder="${q.placeholder || ''}">${prevAnswer || ''}</textarea>
                </div>
            `;
        } 
        else if (q.type === 'yes-no') {
            const hasChoice = prevAnswer && prevAnswer.choice;
            const choiceYes = hasChoice && prevAnswer.choice === 'yes';
            const choiceNo = hasChoice && prevAnswer.choice === 'no';
            
            qInputArea.innerHTML = `
                <div class="yes-no-container">
                    <div class="yes-no-options">
                        <button class="yes-no-card yes-choice ${choiceYes ? 'selected' : ''}" data-choice="yes">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M20 6L9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>כן</span>
                        </button>
                        <button class="yes-no-card no-choice ${choiceNo ? 'selected' : ''}" data-choice="no">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path d="M18 6L6 18M6 6l12 12" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>לא</span>
                        </button>
                    </div>
                    <div class="conditional-details ${choiceYes ? 'active' : ''}" id="detailsContainer">
                        <label class="input-label" id="detailsLabel">${q.followUpText}</label>
                        <textarea class="form-control" id="detailsInput" placeholder="פרט/י כאן...">${choiceYes ? prevAnswer.details : ''}</textarea>
                    </div>
                </div>
            `;
            
            const cards = qInputArea.querySelectorAll('.yes-no-card');
            cards.forEach(card => {
                card.addEventListener('click', (e) => {
                    const selectedChoice = card.getAttribute('data-choice');
                    const isAlreadySelected = card.classList.contains('selected');
                    
                    cards.forEach(c => c.classList.remove('selected'));
                    
                    const detailsContainer = document.getElementById('detailsContainer');
                    if (isAlreadySelected) {
                        if (detailsContainer) {
                            detailsContainer.classList.remove('active');
                            const detailsInput = document.getElementById('detailsInput');
                            if (detailsInput) detailsInput.value = '';
                        }
                    } else {
                        card.classList.add('selected');
                        if (selectedChoice === 'yes') {
                            if (detailsContainer) {
                                detailsContainer.classList.add('active');
                                setTimeout(() => {
                                    const detailsInput = document.getElementById('detailsInput');
                                    if (detailsInput) detailsInput.focus();
                                }, 150);
                            }
                        } else {
                            if (detailsContainer) detailsContainer.classList.remove('active');
                            setTimeout(() => {
                                const currentCardChoice = document.querySelector('.yes-no-card.selected');
                                if (currentCardChoice && currentCardChoice.getAttribute('data-choice') === 'no') {
                                    navigateTo(currentStepIndex + 1);
                                }
                            }, 500);
                        }
                    }
                    
                    saveCurrentStepAnswer();
                    triggerAutosave();
                });
            });
        } 
        else if (q.type === 'scale') {
            qInputArea.innerHTML = `
                <div class="scale-wrapper">
                    <div class="scale-options">
                        ${Array.from({length: 10}, (_, i) => 10 - i).map(num => `
                            <div class="scale-dot ${prevAnswer === num ? 'selected' : ''}" data-value="${num}">${num}</div>
                        `).join('')}
                    </div>
                    <div class="scale-labels">
                        <span>10 - ${q.maxLabel}</span>
                        <span>1 - ${q.minLabel}</span>
                    </div>
                </div>
            `;
            
            const dots = qInputArea.querySelectorAll('.scale-dot');
            dots.forEach(dot => {
                dot.addEventListener('click', () => {
                    const isAlreadySelected = dot.classList.contains('selected');
                    
                    dots.forEach(d => d.classList.remove('selected'));
                    
                    if (!isAlreadySelected) {
                        dot.classList.add('selected');
                        
                        saveCurrentStepAnswer();
                        triggerAutosave();
                        
                        setTimeout(() => {
                            navigateTo(currentStepIndex + 1);
                        }, 400);
                    } else {
                        saveCurrentStepAnswer();
                        triggerAutosave();
                    }
                });
            });
        }
        
        document.getElementById('prevBtn').disabled = (currentStepIndex === 0);
    }
}

function generateSummaryHTML() {
    const summaryContainer = document.getElementById('summarySections');
    summaryContainer.innerHTML = '';
    
    const now = new Date();
    const formattedDate = `${now.getDate().toString().padStart(2, '0')}/${(now.getMonth()+1).toString().padStart(2, '0')}/${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    document.getElementById('pdfDate').innerText = formattedDate;
    
    categories.forEach(cat => {
        const catQuestions = questions.filter(q => q.category === cat.id);
        
        const catGroup = document.createElement('div');
        catGroup.className = 'summary-category-group';
        
        const title = document.createElement('h3');
        title.className = 'summary-category-title';
        title.innerText = cat.name;
        catGroup.appendChild(title);
        
        const qaList = document.createElement('div');
        qaList.className = 'summary-qa-list';
        
        catQuestions.forEach(q => {
            const ans = answers[q.id];
            
            const item = document.createElement('div');
            item.className = 'summary-item';
            
            const questionTitle = document.createElement('div');
            questionTitle.className = 'summary-item-question';
            // Clean question number prefixes for cleaner PDF look
            questionTitle.innerText = q.text.replace(/^\d+\.\s*/, '');
            item.appendChild(questionTitle);
            
            const answerDiv = document.createElement('div');
            
            if (ans === undefined || ans === '') {
                answerDiv.className = 'summary-item-answer unanswered';
                answerDiv.innerText = 'לא נמסרה תשובה';
                item.appendChild(answerDiv);
            } 
            else if (q.type === 'yes-no') {
                const badge = document.createElement('span');
                badge.className = `summary-item-answer badge-choice ${ans.choice === 'yes' ? 'yes-answer' : 'no-answer'}`;
                badge.innerText = ans.choice === 'yes' ? 'כן' : 'לא';
                item.appendChild(badge);
                
                if (ans.choice === 'yes' && ans.details) {
                    const detailsBlock = document.createElement('div');
                    detailsBlock.className = 'summary-details-block';
                    
                    const detailsLabel = document.createElement('div');
                    detailsLabel.className = 'summary-details-label';
                    detailsLabel.innerText = q.followUpText;
                    
                    const detailsContent = document.createElement('div');
                    detailsContent.className = 'summary-item-answer';
                    detailsContent.innerText = ans.details;
                    
                    detailsBlock.appendChild(detailsLabel);
                    detailsBlock.appendChild(detailsContent);
                    item.appendChild(detailsBlock);
                }
            } 
            else if (q.type === 'scale') {
                const badge = document.createElement('span');
                badge.className = 'summary-item-answer badge-choice';
                badge.innerText = `ציון: ${ans} מתוך 10`;
                item.appendChild(badge);
            } 
            else {
                answerDiv.className = 'summary-item-answer';
                answerDiv.innerText = ans;
                item.appendChild(answerDiv);
            }
            
            qaList.appendChild(item);
        });
        
        catGroup.appendChild(qaList);
        summaryContainer.appendChild(catGroup);
    });
}

function renderSidebar() {
    const sidebarNav = document.getElementById('sidebarNav');
    sidebarNav.innerHTML = '';
    
    // Add "Instructions & Explanations" link at the top of the sidebar
    const infoLinkDiv = document.createElement('div');
    infoLinkDiv.className = 'nav-category';
    if (currentStepIndex === -2) {
        infoLinkDiv.classList.add('active');
    }
    
    const infoHeader = document.createElement('div');
    infoHeader.className = 'nav-category-header';
    infoHeader.style.cursor = 'pointer';
    infoHeader.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
        <span>מבוא והנחיות לשאלון</span>
    `;
    
    infoHeader.addEventListener('click', () => {
        navigateTo(-2);
    });
    
    infoLinkDiv.appendChild(infoHeader);
    sidebarNav.appendChild(infoLinkDiv);
    
    categories.forEach((cat, catIdx) => {
        const catQuestions = questions.filter(q => q.category === cat.id);
        const catStepIndex = steps.findIndex(s => s.type === 'transition' && s.category.id === cat.id);
        
        const catDiv = document.createElement('div');
        catDiv.className = 'nav-category';
        
        const isHeaderUnlocked = isStepUnlocked(catStepIndex);
        const isCatActive = steps[currentStepIndex] && 
            ((steps[currentStepIndex].category && steps[currentStepIndex].category.id === cat.id) ||
             (steps[currentStepIndex].question && steps[currentStepIndex].question.category === cat.id));
        
        if (isCatActive) {
            catDiv.classList.add('active');
        }
        
        const header = document.createElement('div');
        header.className = 'nav-category-header';
        header.innerText = cat.name;
        
        if (isHeaderUnlocked) {
            header.style.cursor = 'pointer';
            header.addEventListener('click', () => {
                navigateTo(catStepIndex);
            });
        } else {
            header.style.opacity = '0.5';
            header.style.cursor = 'not-allowed';
        }
        
        catDiv.appendChild(header);
        
        const dotsList = document.createElement('div');
        dotsList.className = 'nav-questions-list';
        
        let hasUnlockedQuestions = false;
        
        catQuestions.forEach((q, qIdx) => {
            const qStepIndex = steps.findIndex(s => s.type === 'question' && s.question.id === q.id);
            const isQUnlocked = isStepUnlocked(qStepIndex);
            
            const dot = document.createElement('button');
            dot.className = 'nav-question-dot';
            dot.innerText = qIdx + 1;
            
            const ans = answers[q.id];
            const hasAns = ans !== undefined && ans !== '' && (typeof ans !== 'object' || ans.choice);
            if (hasAns) {
                dot.classList.add('completed');
            }
            
            if (qStepIndex === currentStepIndex) {
                dot.classList.add('active');
            }
            
            if (isQUnlocked) {
                hasUnlockedQuestions = true;
                dot.style.cursor = 'pointer';
                dot.addEventListener('click', () => {
                    navigateTo(qStepIndex);
                });
            } else {
                dot.style.opacity = '0.4';
                dot.style.cursor = 'not-allowed';
                dot.setAttribute('disabled', 'true');
            }
            
            dotsList.appendChild(dot);
        });
        
        if (hasUnlockedQuestions || isCatActive) {
            catDiv.appendChild(dotsList);
        } else {
            dotsList.style.display = 'none';
        }
        
        sidebarNav.appendChild(catDiv);
    });
}

// ==========================================================================
// Modal Controllers
// ==========================================================================

function showResetModal() {
    document.getElementById('resetModal').classList.add('active');
}

function hideResetModal() {
    document.getElementById('resetModal').classList.remove('active');
}

// ==========================================================================
// Event Binding & Core Bootstrap
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    initializeSteps();
    loadFromLocalStorage();
    renderStep();
    renderSidebar();
    
    document.getElementById('startBtn').addEventListener('click', () => {
        navigateTo(-2);
    });
    
    const infoBtn = document.getElementById('infoBtn');
    if (infoBtn) {
        infoBtn.addEventListener('click', () => {
            navigateTo(-2);
        });
    }
    
    const backToWelcomeBtn = document.getElementById('backToWelcomeBtn');
    if (backToWelcomeBtn) {
        backToWelcomeBtn.addEventListener('click', () => {
            navigateTo(-1);
        });
    }
    
    const confirmStartBtn = document.getElementById('confirmStartBtn');
    if (confirmStartBtn) {
        confirmStartBtn.addEventListener('click', () => {
            navigateTo(lastActiveStepIndex);
        });
    }
    
    document.getElementById('startCategoryBtn').addEventListener('click', () => {
        navigateTo(currentStepIndex + 1);
    });
    
    const prevCategoryBtn = document.getElementById('prevCategoryBtn');
    if (prevCategoryBtn) {
        prevCategoryBtn.addEventListener('click', () => {
            if (currentStepIndex > 0) {
                navigateTo(currentStepIndex - 1);
            } else if (currentStepIndex === 0) {
                navigateTo(-2);
            }
        });
    }
    
    document.getElementById('prevBtn').addEventListener('click', () => {
        if (currentStepIndex > 0) {
            navigateTo(currentStepIndex - 1);
        }
    });
    
    document.getElementById('skipBtn').addEventListener('click', () => {
        navigateTo(currentStepIndex + 1, true);
    });
    
    document.getElementById('nextBtn').addEventListener('click', () => {
        navigateTo(currentStepIndex + 1);
    });
    
    document.getElementById('resetBtn').addEventListener('click', showResetModal);
    document.getElementById('summaryResetBtn').addEventListener('click', showResetModal);
    document.getElementById('cancelResetBtn').addEventListener('click', hideResetModal);
    
    document.getElementById('confirmResetBtn').addEventListener('click', () => {
        clearLocalStorage();
        hideResetModal();
        navigateTo(-1);
    });
    
    document.getElementById('resetModal').addEventListener('click', (e) => {
        if (e.target.id === 'resetModal') {
            hideResetModal();
        }
    });
    
    document.getElementById('downloadPdfBtn').addEventListener('click', () => {
        const element = document.getElementById('pdfContentArea');
        const pdfBtn = document.getElementById('downloadPdfBtn');
        
        const originalHtml = pdfBtn.innerHTML;
        pdfBtn.innerHTML = `
            <svg class="animate-spin" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" style="animation: spin 1s linear infinite;">
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-opacity="0.25"></circle>
                <path d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
            </svg>
            <span>מייצר PDF...</span>
        `;
        pdfBtn.disabled = true;
        
        // Backup original HTML of the PDF area to restore it perfectly later
        const originalPdfAreaHtml = element.innerHTML;
        
        try {
            if (typeof html2pdf === 'undefined') {
                throw new Error("ספריית ייצור ה-PDF (html2pdf) לא נטענה בדפדפן. אנא ודא שיש לך חיבור אינטרנט פעיל ונסה לטעון מחדש את הדף.");
            }
            
            const fullNameAns = answers['q1'];
            const pdfFileName = fullNameAns ? `שאלון - ${fullNameAns}.pdf` : 'שאלון - זוגיות סינרגית.pdf';
            
            // Helper to wrap text into lines of maxChars and replace inner spaces with NBSP
            function wrapTextAndReplaceSpaces(text, maxChars = 70) {
                const paragraphs = text.split('\n');
                const wrappedParagraphs = paragraphs.map(para => {
                    const words = para.split(/[ ]+/);
                    const lines = [];
                    let currentLine = [];
                    let currentLength = 0;
                    
                    words.forEach(word => {
                        if (!word) return;
                        if (currentLength + word.length + (currentLine.length > 0 ? 1 : 0) > maxChars) {
                            if (currentLine.length > 0) {
                                lines.push(currentLine.join('\u00a0'));
                            }
                            currentLine = [word];
                            currentLength = word.length;
                        } else {
                            currentLine.push(word);
                            currentLength += word.length + (currentLine.length > 1 ? 1 : 0);
                        }
                    });
                    
                    if (currentLine.length > 0) {
                        lines.push(currentLine.join('\u00a0'));
                    }
                    
                    return lines.join('<br>');
                });
                
                return wrappedParagraphs.join('<br>');
            }

            // Recursively wrap text nodes and inject <br> tags at line boundaries
            function wrapTextInNode(node, maxChars = 70) {
                if (node.nodeType === 3) { // TEXT_NODE
                    const text = node.nodeValue;
                    if (!text.trim()) return;
                    
                    // Exclude styling templates or tags, only wrap raw text
                    const wrappedHtml = wrapTextAndReplaceSpaces(text, maxChars);
                    
                    const temp = document.createElement('div');
                    temp.innerHTML = wrappedHtml;
                    
                    const fragment = document.createDocumentFragment();
                    while (temp.firstChild) {
                        fragment.appendChild(temp.firstChild);
                    }
                    
                    node.parentNode.replaceChild(fragment, node);
                } else if (node.nodeType === 1) { // ELEMENT_NODE
                    // Skip script elements and check children
                    if (node.tagName === 'SCRIPT') return;
                    
                    // If it is a badge choice element, just replace standard spaces with NBSP directly (no wrap needed for short text)
                    if (node.classList.contains('badge-choice')) {
                        node.innerHTML = node.innerText.replace(/ /g, '\u00a0');
                        return;
                    }
                    
                    const children = Array.from(node.childNodes);
                    for (let i = 0; i < children.length; i++) {
                        wrapTextInNode(children[i], maxChars);
                    }
                }
            }
            
            // 1. Temporarily wrap text and replace spaces inside PDF DOM
            wrapTextInNode(element, 70);
            
            const opt = {
                margin:       [15, 15, 15, 15],
                filename:     pdfFileName,
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { 
                    scale: 2, 
                    useCORS: true,
                    scrollX: 0,
                    scrollY: 0
                },
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
                pagebreak:    { 
                    mode: ['css', 'legacy'],
                    avoid: ['.summary-item', '.summary-category-title', '.pdf-only-header']
                }
            };
            
            html2pdf().set(opt).from(element).save().then(() => {
                // 2. Restore normal state immediately
                element.innerHTML = originalPdfAreaHtml;
                pdfBtn.innerHTML = originalHtml;
                pdfBtn.disabled = false;
            }).catch(err => {
                console.error("PDF generation failed inside promise:", err);
                element.innerHTML = originalPdfAreaHtml;
                alert("חלה שגיאה במהלך ייצור ה-PDF: " + err.message);
                pdfBtn.innerHTML = originalHtml;
                pdfBtn.disabled = false;
            });
        } catch (err) {
            console.error("PDF generation failed synchronously:", err);
            element.innerHTML = originalPdfAreaHtml;
            alert("שגיאה בייצור ה-PDF: " + err.message);
            pdfBtn.innerHTML = originalHtml;
            pdfBtn.disabled = false;
        }
    });

    // Support keyboard arrow keys navigation (RTL/Hebrew friendly)
    document.addEventListener('keydown', (e) => {
        // Stop if user is currently typing in an input or textarea
        const activeEl = document.activeElement;
        const isTyping = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA');
        if (isTyping) return;
        
        if (currentStepIndex >= 0 && currentStepIndex < steps.length) {
            const step = steps[currentStepIndex];
            if (step && step.type === 'question') {
                if (e.key === 'ArrowLeft') {
                    // Left Arrow -> Next (pointing left in RTL)
                    navigateTo(currentStepIndex + 1);
                } else if (e.key === 'ArrowRight') {
                    // Right Arrow -> Previous (pointing right in RTL)
                    if (currentStepIndex > 0) {
                        navigateTo(currentStepIndex - 1);
                    }
                }
            }
        }
    });
});

const style = document.createElement('style');
style.innerHTML = `
@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}
`;
document.head.appendChild(style);

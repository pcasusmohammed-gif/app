// --- BASE DE DONNÉES CLINIQUE COMPLÈTE ---
const SOUNDS_DB = [
    // --- CARDIAQUE : NORMAL ---
    {cat: "C", type: "✅ Normal", name: "B1 (Boum)", file: "b1.mp3", desc: "Fermeture des valves auriculo-ventriculaires (mitrale et tricuspide). Marque le début de la systole. Maximum à l'apex."},
    {cat: "C", type: "✅ Normal", name: "B2 (Taque)", file: "b2.mp3", desc: "Fermeture des valves sigmoïdes (aortique et pulmonaire). Marque le début de la diastole. Maximum à la base (2ème espace intercostal)."},
    
    // --- CARDIAQUE : ADDITIONNEL ---
    {cat: "C", type: "⚠️ Additionnel", name: "B3 (Galop ventriculaire)", file: "b3.mp3", desc: "Bruit protodiastolique de remplissage ventriculaire rapide. Normal chez l'enfant/sportif ; indique une insuffisance cardiaque ou une surcharge volumique chez l'adulte."},
    {cat: "C", type: "⚠️ Additionnel", name: "B4 (Galop auriculaire)", file: "b4.mp3", desc: "Bruit télédiastolique. Dû à la contraction de l'oreillette contre un ventricule rigide et peu compliant (ex: hypertension sévère, hypertrophie)."},
    
    // --- CARDIAQUE : PATHOLOGIQUE ---
    {cat: "C", type: "❌ Pathologique", name: "Souffle de rétrécissement aortique", file: "retrecissement_aortique.mp3", desc: "Souffle systolique éjectionnel, rude, losangique (crescendo-decrescendo). Foyer aortique (2ème EIC droit), irradiant vers les vaisseaux du cou."},
    {cat: "C", type: "❌ Pathologique", name: "Souffle d'insuffisance aortique", file: "insuffisance_aortique.mp3", desc: "Souffle diastolique doux, humé, decrescendo. Maximum au foyer aortique ou bord sternal gauche, patient penché en avant."},
    {cat: "C", type: "❌ Pathologique", name: "Roulement de rétrécissement mitral", file: "retrecissement_mitral.mp3", desc: "Roulement diastolique de basse fréquence, souvent précédé d'un claquement d'ouverture. Maximum à l'apex en décubitus latéral gauche."},
    {cat: "C", type: "❌ Pathologique", name: "Souffle d'insuffisance mitrale", file: "insuffisance_mitrale.mp3", desc: "Souffle holosystolique en jet de vapeur, de haute fréquence. Maximum à l'apex, irradiant vers l'aisselle gauche."},
    {cat: "C", type: "❌ Pathologique", name: "Souffle d'insuffisance tricuspidienne", file: "insuffisance_tricuspidienne.mp3", desc: "Souffle holosystolique au bord inférieur gauche du sternum. L'intensité augmente à l'inspiration (Signe de Carvallo)."},
    {cat: "C", type: "❌ Pathologique", name: "Souffle de rétrécissement pulmonaire", file: "retrecissement_pulmonaire.mp3", desc: "Souffle systolique éjectionnel au 2ème EIC gauche. Irradie souvent vers l'épaule gauche et le cou."},
    {cat: "C", type: "❌ Pathologique", name: "Frottement péricardique", file: "frottement_pericardique.mp3", desc: "Bruit superficiel, rude, de va-et-vient (comme du cuir froissé). Signe classique de la péricardite aiguë."},
    {cat: "C", type: "❌ Pathologique", name: "Claquement d'ouverture", file: "claquement_ouverture.mp3", desc: "Bruit sec et claquant en début de diastole, causé par l'ouverture forcée d'une valve mitrale sténosée et épaissie."},
    {cat: "C", type: "❌ Pathologique", name: "Clic d'éjection", file: "clic_ejection.mp3", desc: "Bruit sec protosystolique. Souvent associé à une bicuspidie aortique ou une sténose valvulaire pulmonaire."},
    {cat: "C", type: "❌ Pathologique", name: "Clic mésosystolique", file: "clic_mesosystolique.mp3", desc: "Bruit sec en milieu de systole, souvent suivi d'un souffle télésystolique. Signe classique du prolapsus de la valve mitrale (PVM)."},

    // --- PULMONAIRE : NORMAL ---
    {cat: "P", type: "✅ Normal", name: "Murmure vésiculaire", file: "mr.mp3", desc: "Bruit doux et humé, de basse fréquence. L'inspiration est plus longue que l'expiration. Entendu sur la majeure partie des champs pulmonaires périphériques."},
    {cat: "P", type: "✅ Normal", name: "Bruit trachéo-bronchique (Souffle tubaire)", file: "souffle_tubaire.mp3", desc: "Fort, de haute tonalité, tubulaire. L'expiration est plus longue que l'inspiration. Normal sur la trachée ; pathologique si entendu en périphérie (syndrome de condensation)."},
    {cat: "P", type: "✅ Normal", name: "Bruit broncho-vésiculaire", file: "broncho_vesiculaire.mp3", desc: "Tonalité et intensité intermédiaires. Inspiration égale à l'expiration. Normalement entendu entre les omoplates et aux 1er/2ème EIC en antérieur."},
    {cat: "P", type: "✅ Normal", name: "Bruit trachéal", file: "bruit_tracheal.mp3", desc: "Très fort, rude et de haute fréquence. Entendu directement sur la trachée dans le cou."},

    // --- PULMONAIRE : SURAJOUTÉS (PATHOLOGIQUES) ---
    {cat: "P", type: "❌ Pathologique", name: "Râles crépitants", file: "crepitants.mp3", desc: "Bruits discontinus, fins et secs (comme du Velcro ou des cheveux frottés près de l'oreille). Suggère du liquide dans les alvéoles (Pneumonie, Insuffisance cardiaque, Fibrose)."},
    {cat: "P", type: "❌ Pathologique", name: "Sibilants (Wheezing)", file: "sibilants.mp3", desc: "Bruits continus, sifflements musicaux aigus. Causés par le passage de l'air dans des bronches rétrécies (Asthme, BPCO)."},
    {cat: "P", type: "❌ Pathologique", name: "Ronflants (Rhonchi)", file: "rhonchi.mp3", desc: "Bruits continus, de basse fréquence, ressemblant à des ronflements. Indique des sécrétions épaisses dans les grosses voies (Bronchite). Disparaissent souvent après la toux."},
    {cat: "P", type: "❌ Pathologique", name: "Stridor", file: "stridor.mp3", desc: "Bruit aigu, fort et strident, principalement à l'inspiration. Signe d'URGENCE d'une obstruction des voies aériennes supérieures (Épiglottite, Corps étranger)."},
    {cat: "P", type: "❌ Pathologique", name: "Frottement pleural", file: "frottement_pleural.mp3", desc: "Bruit rude, grinçant, audible aux deux temps respiratoires. Se produit lorsque les feuillets pleuraux enflammés frottent l'un contre l'autre (Pleurésie)."},
    {cat: "P", type: "❌ Pathologique", name: "Diminution du murmure vésiculaire", file: "diminution_murmure.mp3", desc: "Moins audible que la normale. Se produit lors d'un faible effort respiratoire, d'une hyperinflation (BPCO sévère/Emphysème) ou chez les patients obèses."},
    {cat: "P", type: "❌ Pathologique", name: "Abolition du murmure vésiculaire", file: "abolition_murmure.mp3", desc: "Aucun passage d'air entendu. Signe d'URGENCE indiquant une obstruction sévère, un épanchement pleural massif ou un pneumothorax (poumon collabé)."}
];

// Global audio object
let currentAudio = null;

function getBadgeColor(type) {
    if (type.includes("✅")) return "#16A34A"; // ft.Colors.GREEN_600
    if (type.includes("⚠️")) return "#EA580C"; // ft.Colors.ORANGE_600
    return "#DC2626"; // ft.Colors.RED_600
}

function playSound(filename) {
    // Stop currently playing audio if any
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }
    
    // Play new audio from the assets folder
    currentAudio = new Audio('assets/' + filename);
    currentAudio.play().catch(error => {
        console.error(`Erreur : Le fichier ${filename} est introuvable ou ne peut pas être lu.`);
        alert(`Le fichier audio "${filename}" n'a pas pu être lu. Assurez-vous qu'il se trouve dans le dossier "assets".`);
    });
}

function switchToList(cat) {
    document.getElementById('home-view').classList.add('hidden');
    document.getElementById('list-view').classList.remove('hidden');
    
    const title = cat === "C" ? "BRUITS CARDIAQUES" : "BRUITS PULMONAIRES";
    document.getElementById('list-title').innerText = title;

    const listContainer = document.getElementById('list-container');
    listContainer.innerHTML = ''; // Clear previous items

    const items = SOUNDS_DB.filter(s => s.cat === cat);

    items.forEach(item => {
        const badgeColor = getBadgeColor(item.type);
        
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-header">
                <h3>${item.name}</h3>
                <span class="badge" style="background-color: ${badgeColor}">${item.type}</span>
            </div>
            <hr>
            <p class="desc">${item.desc}</p>
            <button class="play-btn" onclick="playSound('${item.file}')">
                <span class="material-icons-round">play_arrow</span> ÉCOUTER
            </button>
        `;
        listContainer.appendChild(card);
    });
}

function switchToHome() {
    // Stop audio when returning home
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    document.getElementById('list-view').classList.add('hidden');
    document.getElementById('home-view').classList.remove('hidden');
}
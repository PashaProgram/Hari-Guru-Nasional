// ============================================================
// DAFTAR LAGU — ganti nama file sesuai isi folder lagu/.
// Lagu TIDAK diputar otomatis; pengguna harus menekan tombol putar.
// ============================================================
const TRACKS = [
  { title: "Lagu untuk Guru", artist: "Instrumental", file: "lagu/lagu1.mp3" },
  { title: "Selamat Hari Guru", artist: "Instrumental", file: "lagu/lagu2.mp3" },
  { title: "Kenangan di Sekolah", artist: "Instrumental", file: "lagu/lagu3.mp3" }
];

// ============================================================
// LOGIKA SURAT
// ============================================================
const $ = id => document.getElementById(id);
const PER_PAGE = 20;
let page = 1;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function renderLetters(){
  const total = LETTERS.length;
  const pages = Math.max(1, Math.ceil(total / PER_PAGE));
  $('letterCount').textContent = total;
  const start = (page - 1) * PER_PAGE;
  const visible = LETTERS.slice(start, start + PER_PAGE);
  $('letterGrid').innerHTML = visible.map((l, i) => {
    const idx = start + i;
    const preview = l.body.length > 180 ? l.body.slice(0, 177) + '…' : l.body;
    return `<button class="letter-tile" type="button" data-i="${idx}"><span class="num">SURAT · ${String(idx+1).padStart(3,'0')}</span><p>“${esc(preview)}”</p><small>— ${esc(l.to || 'Untuk Bapak/Ibu Guru')} ↗</small></button>`;
  }).join('') || '<p style="color:var(--muted);font-size:13px">Belum ada surat.</p>';

  const pag = $('letterPagination');
  if (total <= PER_PAGE) { pag.hidden = true; }
  else {
    pag.hidden = false;
    let html = `<button type="button" id="pgPrev" ${page <= 1 ? 'disabled' : ''}>← Previous</button>`;
    for (let p = 1; p <= pages; p++) {
      html += `<button type="button" class="pgNum ${p === page ? 'active' : ''}" data-p="${p}">${p}</button>`;
    }
    html += `<button type="button" id="pgNext" ${page >= pages ? 'disabled' : ''}>Next →</button>`;
    html += `<span class="letter-page-info">Halaman ${page} dari ${pages} · ${total} surat</span>`;
    pag.innerHTML = html;
    $('pgPrev').onclick = () => { if (page > 1) { page--; renderLetters(); $('surat').scrollIntoView({behavior:'smooth'}); } };
    $('pgNext').onclick = () => { if (page < pages) { page++; renderLetters(); $('surat').scrollIntoView({behavior:'smooth'}); } };
    pag.querySelectorAll('.pgNum').forEach(b => b.onclick = () => { page = Number(b.dataset.p); renderLetters(); $('surat').scrollIntoView({behavior:'smooth'}); });
  }

  $('letterGrid').querySelectorAll('[data-i]').forEach(b => b.onclick = () => {
    const l = LETTERS[Number(b.dataset.i)];
    $('modalTitle').textContent = 'Surat untuk ' + (l.to || 'Bapak/Ibu Guru');
    $('modalBody').textContent = l.body;
    $('modal').classList.add('show');
  });
}
$('modalClose').onclick = () => $('modal').classList.remove('show');
$('modal').onclick = e => { if (e.target === $('modal')) $('modal').classList.remove('show'); };

// ============================================================
// LOGIKA MUSIK — harus ditekan dulu, tidak autoplay
// ============================================================
const audio = $('audio');
let idx = 0, isPlaying = false;

function fmt(s){ s = Math.floor(s || 0); return Math.floor(s/60) + ':' + String(s%60).padStart(2,'0'); }

function loadTrack(i, autoplay){
  if (!TRACKS.length) return;
  idx = (i + TRACKS.length) % TRACKS.length;
  const t = TRACKS[idx];
  $('currentTitle').textContent = t.title;
  $('currentArtist').textContent = t.artist || 'Lagu untuk guru';
  audio.src = t.file;
  audio.currentTime = 0;
  $('progress').value = 0;
  $('elapsed').textContent = '0:00';
  renderPlaylist();
  if (autoplay) playAudio();
}

function renderPlaylist(){
  $('playlist').innerHTML = TRACKS.map((t, i) => `<button class="track ${i===idx?'active':''}" data-i="${i}"><span class="track-no">${String(i+1).padStart(2,'0')}</span><span><strong>${t.title}</strong><small>${t.artist||'Lagu untuk guru'}</small></span></button>`).join('');
  document.querySelectorAll('#playlist .track').forEach(b => b.onclick = () => loadTrack(Number(b.dataset.i), true));
}

async function playAudio(){
  try { await audio.play(); isPlaying = true; $('playPause').textContent = 'Ⅱ'; }
  catch(e){ isPlaying = false; $('playPause').textContent = '▶'; }
}
function pauseAudio(){ audio.pause(); isPlaying = false; $('playPause').textContent = '▶'; }

$('playPause').onclick = () => isPlaying ? pauseAudio() : playAudio();
$('nextTrack').onclick = () => loadTrack(idx+1, true);
$('prevTrack').onclick = () => loadTrack(idx-1, true);
$('musicToggle').onclick = () => $('musicPanel').classList.toggle('open');
$('musicClose').onclick = () => $('musicPanel').classList.remove('open');

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    $('progress').value = (audio.currentTime / audio.duration) * 100;
    $('elapsed').textContent = fmt(audio.currentTime);
    $('duration').textContent = fmt(audio.duration);
  }
});
$('progress').oninput = () => { if (audio.duration) audio.currentTime = ($('progress').value / 100) * audio.duration; };
audio.addEventListener('ended', () => { if (TRACKS.length) loadTrack(idx+1, true); });
audio.addEventListener('error', () => { $('currentArtist').textContent = 'File lagu tidak ditemukan di folder lagu/'; });

// ============================================================
// INISIALISASI
// ============================================================
renderLetters();
if (TRACKS.length) loadTrack(0, false); // tampilkan judul lagu pertama, TAPI tidak diputar
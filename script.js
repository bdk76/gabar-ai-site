document.addEventListener('DOMContentLoaded',()=>console.log("Site loaded"))
// Intake form submission via mailto (no backend)
const form = document.getElementById('demoForm');
if(form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(form);
    const name = (fd.get('name')||'').trim();
    const company = (fd.get('company')||'').trim();
    const phone = (fd.get('phone')||'').trim();
    const email = (fd.get('email')||'').trim();
    if(!name || !company || !phone || !email){ alert('Please complete all fields.'); return; }
    const subject = encodeURIComponent('Demo Request — Gabar AI');
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nPhone: ${phone}\nEmail: ${email}`
    );
    window.location.href = `mailto:info@gabar.ai?subject=${subject}&body=${body}`;
  });
}

/**
 * lib/leadApi.js
 * Call this from any component to submit the lead form.
 */

export async function submitLeadForm(formData) {
  const payload = {
    name: formData.name,
    email: formData.email,
    number: formData.number,
    company_name: formData.company_name,
    message: formData.message || "",
    source_page: window.location.pathname, // auto-captures current page path
  };

  const res = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    // Throw so the calling component can handle it
    throw { status: res.status, ...data };
  }

  return data; // { success: true, message: "...", id: 42 }
}

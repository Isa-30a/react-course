export default async function postContact(name, email, message) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });
  //habdle this way to tanstack will handle correctly the error
  if (!response.ok) {
    throw new Error("Netwoek response was not ok. Send help");
  }

  return response.json();
}

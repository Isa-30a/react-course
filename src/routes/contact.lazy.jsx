import { createLazyFileRoute } from "@tanstack/react-router";
import { useMutation } from "@tanstack/react-query";
import postContact from "../api/postContact";

export const Route = createLazyFileRoute("/contact")({
  component: ContactRoute,
});

function ContactRoute() {
  //a mutation is a way of say "its changing something" -> PSOT, PUT, PATCH
  const mutation = useMutation({
    //whenever youre ready call this function this is the function that calls the api
    mutationFn: function (e) {
      e.preventDefault();
      //Formdata comes from the browser not react
      const formData = new FormData(e.target);
      //e.target will be the form

      return postContact(
        formData.get("name"),
        formData.get("email"),
        formData.get("message")
      );
    },
  });

  return (
    <div className="contact">
      <h2>Contact</h2>
      {mutation.isSuccess ? (
        <h3>Submitted</h3>
      ) : (
        //right here mutattion.mutate -> actually its not just calling the function up (mutationFn) its doing a lot of others things too
        <form onSubmit={mutation.mutate}>
          <input name="name" placeholder="Name" />
          <input name="email" placeholder="Email" type="email" />
          <textarea name="message" placeholder="Message" />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

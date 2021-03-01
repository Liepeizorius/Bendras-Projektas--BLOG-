window.onload = function () {
  document.querySelector("#logSubmit").addEventListener("click", async (e) => {
    e.preventDefault();
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    let data = {
      username,
      password,
    };

    try {
      const response = await fetch(
        "http://localhost:1111/api/v1/scripts/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(data),
        }
      );

      if (response.status != 200) throw await response.json();

      let token = response.headers.get("user-auth");
      localStorage.setItem("user-auth", token);

      console.log(await response.json());
      // Perregistruoja į user-write.html
      window.location.href = "../pages/user-write.html";
    } catch (e) {
      alert(e);
    }
  });
};

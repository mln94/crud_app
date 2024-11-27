document.addEventListener("DOMContentLoaded", () => { 
    const form = document.getElementById("updatecampaign");
    const button = document.getElementById("update-button");

    button.addEventListener("click", (event) => {
        event.preventDefault();

        // Get form values
        const id = document.getElementById("_id").value; // Ensure this field exists in the form
        const title = document.getElementById("campaign-title").value;
        const channel = document.getElementById("channel").value;
        const budget = document.getElementById("budget").value;
        const startDate = document.getElementById("start-date").value;
        const endDate = document.getElementById("end-date").value;
        const results = document.getElementById("results").value;

        const data = { title, channel, budget, startDate, endDate, results };

        // Correct request URL
        let request_url = `http://localhost:3000/getcampaign/${id}`;

        fetch(request_url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) throw new Error("Error updating campaign");
            return response.json();
        })
        .then(responseData => {
            alert("Data Updated Successfully!");
            window.location.replace("/");
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Failed to update campaign.");
        });
    });
});

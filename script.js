document.addEventListener("DOMContentLoaded", function () {

    function Myplaces() {
        this.places = {};
        this.currentId = 0;
    }

    Myplaces.prototype.assignId = function() {
        this.currentId++;
        return this.currentId;
    };

    Myplaces.prototype.addPlace = function(place) {
        place.id = this.assignId();
        this.places[place.id] = place;
    };

    Myplaces.prototype.deletePlace = function(id) {
        if (this.places[id]) {
            delete this.places[id];
            return true;
        }
        return false;
    };

    Myplaces.prototype.toggleComplete = function(id) {
        if (this.places[id]) {
            this.places[id].isCompleted = !this.places[id].isCompleted;
        }
    };

    function Place(description, location, landmarks, time) {
        this.description = description;
        this.location = location;
        this.landmarks = landmarks;
        this.time = time;
        this.isCompleted = false; // initialize
    }

    const myPlaces = new Myplaces();
    const listEl = document.getElementById('places-display');

    const defaultPlaces = [
        new Place("swimming 🏖️", "beach", "island", "morning"),

        
    ];

    defaultPlaces.forEach(place => myPlaces.addPlace(place));

    document
        .getElementById("add-place-btn")
        .addEventListener("click", handleAddPlace);

    function handleAddPlace() {
            const descIn = document.getElementById('t-desc');
        const locIn = document.getElementById('location');
        const landIn = document.getElementById('landmarks');
        const timeIn = document.getElementById('time');

        

        if (locIn.value.trim() === "") {
            alert("Please enter a place location.");
            return;
        }

        const newPlace = new Place(
            
            descIn.value,
            locIn.value,
            landIn.value,
            timeIn.value
        );

        myPlaces.addPlace(newPlace);
        renderPlaces();

        // clear inputs
        descIn.value = "";
        locIn.value = "";
        landIn.value = "";
        timeIn.value = "";
    }

    function handleDelete(id) {
        myPlaces.deletePlace(id);
        renderPlaces();
    }

    function handleToggle(id) {
        myPlaces.toggleComplete(id);
        renderPlaces();
    }

    function renderPlaces() {
        listEl.innerHTML = "";

        Object.values(myPlaces.places).forEach(place => {
            const card = document.createElement('div');
            card.className = "place-card";

            card.innerHTML = `
            <p><strong>Description:</strong> ${place.description}</p>
                <p><strong>Location:</strong> ${place.location}</p>
                <p><strong>Landmarks:</strong> ${place.landmarks}</p>
                <p><strong>Time Visited:</strong> ${place.time}</p>
                <button onclick="handleToggle(${place.id})">
                    ${place.isCompleted ? "Visited ✓" : "Mark Visited"}
                </button>
                <button onclick="handleDelete(${place.id})">
                    Delete
                </button>
            `;
            listEl.appendChild(card);
        });
    }

    window.handleToggle = handleToggle;
    window.handleDelete = handleDelete;

});

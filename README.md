<!DOCTYPE html>

<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Place Tracker – README</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 32px; line-height: 1.6; }
    h1, h2 { color: #2c3e50; }
    code, pre { background: #f1f1f1; padding: 10px; border-radius: 6px; display: block; }
  </style>
</head>
<body>

<h1>Place Tracker</h1>
<p>A simple JavaScript website for keeping track of places you’ve visited. Each place is stored as an object with details like location, landmarks, time of year, and notes. Clicking a place name shows its details.</p>

<h2>Features</h2>
<ul>
  <li>Create place objects with multiple properties</li>
  <li>Display place details on click</li>
  <li>Business logic built using Test-Driven Development (TDD)</li>
</ul>

<h2>Business Logic</h2>
<p>The core of the app is a <strong>Place</strong> object:</p>
<pre>
Place {
  name,
  location,
  landmarks[],
  timeOfYear,
  notes
}
</pre>

<h2>Testing (TDD)</h2>
<p>Tests were written before the business logic to ensure:</p>
<ul>
  <li>Places are created correctly</li>
  <li>All properties are stored properly</li>
</ul>

<h2>Commits</h2>
<p>After each passing test, changes were committed to Git.</p>

<h2>User Interface</h2>
<p>After completing the business logic, a simple UI was added to list places and show details when clicked.</p>

<h2>Technologies</h2>
<ul>
  <li>HTML</li>
  <li>JavaScript</li>
  <li>CSS (optional)</li>
</ul>

<p><strong>Author:</strong> Samwel</p>
<p>Happy coding 🚀</p>

</body>
<
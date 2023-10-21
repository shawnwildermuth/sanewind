<script setup lang="ts"></script>

<template>
  <div class="p-2 container mx-auto bg-gray-200">
    <h1>Testing H1</h1>
    <h2>Testing H1</h2>
    <h3>Testing H1</h3>
    <h4>Testing H1</h4>
    <form novalidate>
      <div class="grid grid-cols-2 gap-2 w-full p-4">
        <div>
          <label>Empty</label>
          <input />
          <label>Disabled</label>
          <input disabled value="none" />
          <label>Text</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Url</label>
          <input type="url" />
          <label>Password</label>
          <input type="password" />
          <label>Number</label>
          <input type="number" />
          <label>Date</label>
          <input type="date" />
          <label>DateTime-Local</label>
          <input type="datetime-local" />
          <label>Month</label>
          <input type="month" />
          <label>Search</label>
          <input type="search" />
        </div>
        <div>
          <label>Tel</label>
          <input type="tel" />
          <label>Time</label>
          <input type="time" />
          <label>Week</label>
          <input type="week" />
          <label>Text Area</label>
          <textarea rows="4"></textarea>
          <label>Select</label>
          <select>
            <option>Foo</option>
            <option>Bar</option>
            <option>Quux</option>
          </select>
          <label>Select - Multi</label>
          <select multiple>
            <option>Foo</option>
            <option>Bar</option>
            <option>Quux</option>
          </select>
          <label> <input type="checkbox" /> Checkbox </label>
          <label>Radio Buttons</label>
          <label>
            <input type="radio" value="One" name="aRadio" />
            One</label
          >
          <label>
            <input type="radio" value="Two" name="aRadio" />
            Three</label
          >
          <label>
            <input type="radio" value="Three" name="aRadio" />
            Three</label
          >

          <label>Button</label>
          <button type="submit">Submit</button>
          <button type="button">Type=Button</button>
          <button type="button" disabled>Disabled Button</button>
        </div>
      </div>
    </form>
  </div>
</template>

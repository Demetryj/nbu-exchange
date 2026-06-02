# NBU Exchange Rates SPA Application

This repository contains a Single Page Application (SPA) for displaying exchange rates from the National Bank of Ukraine (NBU). The application allows users to view current exchange rates, edit them locally, view modified rates, and search for exchange rates by a selected date.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation and Running](#installation-and-running)
- [Usage](#usage)

## Features

- **Home Page:** Displays current exchange rates for today's date.
- **Modified Rates:** Allows users to view exchange rates that have been changed locally.
- **Rate Search:** Allows users to search for exchange rates by a specific date.
- **Rate Editing:** Allows users to edit the exchange rate of a selected currency. Changes are saved locally without being sent to the server.
- **Pagination:** Displays 10 currencies per page with the ability to switch pages using numbered buttons and "Previous" / "Next" arrows.
- **Local Search:** Filters currencies by name.

## Technologies

- **React.js:** A library for building user interfaces.
- **Redux Toolkit:** Used for global application state management.
- **React Router:** Used for routing between pages.
- **Axios:** Used for making HTTP requests to the NBU API.
- **CSS:** Used for styling components.

## Installation and Running

### Steps

1. **Clone the repository:**

```bash
git clone <repository-url>
```

2. **Navigate to the project directory:**

```bash
cd nbu-exchange
```

3. **Install dependencies:**

```bash
npm install
```

4. **Run the project:**

```bash
npm start
```

## Usage

### Navigation

- **Home:** Displays current exchange rates for the current day.
- **Modified Rates:** Displays all exchange rates that have been changed by the user.
- **Rate Search:** Allows users to select a date and view exchange rates for that date.

### Editing an Exchange Rate

1. Go to any page with a list of exchange rates: Home, Modified Rates, or Rate Search.
2. Click on the name of the currency you want to edit.
3. Enter the new exchange rate in the corresponding field.
4. Click the "Save" button. Changes are saved locally and displayed on the "Modified Rates" page.

### Pagination

- Use the page number buttons or the "Previous" and "Next" arrows to switch between pages.
- Each page displays 10 currencies.

### Search

- Use the search field to filter currencies by name.
- On the "Rate Search" page, you can select a date to view exchange rates for a specific day.

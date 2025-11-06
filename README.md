# Coder CLI Guide App

## Overview

A comprehensive mobile guide for the Coder CLI tool, designed to help developers quickly learn how to use this powerful coding assistant. This React Native application provides step-by-step instructions, best practices, and tips for maximizing productivity with Coder CLI.

### Key Features

- **Installation Guide**: Easy-to-follow instructions for setting up Coder CLI
- **Authentication Walkthrough**: Step-by-step process to configure authentication
- **Usage Instructions**: Learn basic commands and first steps
- **Best Practices**: Tips and guidelines to optimize your workflow
- **Interactive UI**: Clean, dark-themed interface with code examples

### Target Audience

Developers and teams looking to integrate AI assistance into their coding workflow, particularly those new to Coder CLI.

### Problem Solved

Simplifies the learning curve for Coder CLI by providing a structured, accessible guide that users can reference on their mobile devices, eliminating the need to search through documentation.

## Technical Details

### Built With

- React Native
- TypeScript
- Expo
- React Navigation
- Lucide React Native (for icons)

### Prerequisites

- Node.js (v14 or newer)
- yarn
- Expo CLI
- iOS Simulator or Android Emulator (for development)

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/gzopelaro/coder-app.git
cd coder-app
```

2. **Install dependencies**

```bash
yarn install
```

3. **Start the development server**

```bash
yarn start
```

4. **Run on a device or emulator**

- Press `i` to open in iOS simulator
- Press `a` to open in Android emulator
- Scan the QR code with Expo Go app on your physical device

### Project Structure

```
/
├── src/
│   ├── components/      # Reusable UI components
│   ├── data/            # Static data and content
│   ├── navigation/      # Navigation configuration
│   ├── screens/         # App screens
│   └── theme/           # Styling constants
├── App.tsx              # Main application component
├── app.json             # Expo configuration
└── index.ts             # Entry point
```

### Available Scripts

- `yarn start`: Start the Expo development server
- `yarn android`: Run on Android emulator/device
- `yarn ios`: Run on iOS simulator/device
- `yarn web`: Run in web browser

Contributions are welcome and appreciated! Here's how you can contribute:

### Contributing Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code Style

- Follow the existing code style
- Use TypeScript types appropriately
- Write meaningful component and function names
- Add comments for complex logic

### Reporting Bugs

If you find a bug, please open an issue with:

- A clear title and description
- Steps to reproduce the bug
- Expected behavior
- Screenshots (if applicable)
- Device information (OS, device model, etc.)

## Additional Information

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Contact

Project Link: [https://github.com/gzopelaro/coder-app](https://github.com/gzopelaro/coder-app)

### Acknowledgements

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Lucide Icons](https://lucide.dev/)

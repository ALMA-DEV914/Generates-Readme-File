// TODO: Create a function that returns a license badge based on which license is passed in
 // set the license depending on what was chosen

//If there is no license, return an empty string
function renderLicenseBadge(license) {
![GitHub]("https://img.shields.io/github/license/Alma-Dev914/Readme-Generator?style=for-the-badge");
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
![GitHub]("https://img.shields.io/github/license/Alma-Dev914/Readme-Generator");
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
![GitHub]("https://img.shields.io/github/license/Alma-Dev914/Readme-Generator")
}           
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
     
`;
}

module.exports = generateMarkdown;

const Queue = require("./Queue");

class StarshipEnterprise {
  constructor(officerId = null, officerName = null, reportTo = null) {
    this.officerId = officerId;
    this.officerName = officerName;
    this.reportTo = reportTo; // the officer that the new officer reports to
    this.leftReport = null;
    this.rightReport = null;
  }

  assignOfficer(officerId, officerName) {
    // your solution here

    const newOfficer = new StarshipEnterprise(officerId, officerName);

    if (!this.officerId) {
      // If the tree is empty, the new officer becomes the captain
      this.officerId = officerId;
      this.officerName = officerName;
      return;
    }

    let current = this;
    let parent;

    while (current) {
      parent = current;
      if (officerId < current.officerId) {
        current = current.leftReport;
      } else {
        current = current.rightReport;
      }
    }

    // Assign the new officer based on whether they are less or more experienced than the current officer
    if (officerId < parent.officerId) {
      parent.leftReport = newOfficer;
    } else {
      parent.rightReport = newOfficer;
    }
  }

  findOfficersWithNoDirectReports(values = []) {
    // your solution here

    if (!this.officerId) {
      return values; // Base case: if the current officer is null, return the accumulated values
    }

    if (!this.leftReport && !this.rightReport) {
      values.push(this.officerName); // If the current officer has no direct reports, add their name to the array
    }

    // Recursively check left and right subtrees
    if (this.leftReport) {
      this.leftReport.findOfficersWithNoDirectReports(values);
    }
    if (this.rightReport) {
      this.rightReport.findOfficersWithNoDirectReports(values);
    }

    return values; // Return the array of officers with no direct reports
  }

  listOfficersByExperience(officerNames = []) {
    // your solution here

    if (!this.officerId) {
      return officerNames; // Base case: if the current officer is null, return the accumulated officer names
    }

    // Recursively traverse the right subtree first (higher experience)
    if (this.rightReport) {
      this.rightReport.listOfficersByExperience(officerNames);
    }

    // Add the current officer's name to the array
    officerNames.push(this.officerName);

    // Recursively traverse the left subtree (lower experience)
    if (this.leftReport) {
      this.leftReport.listOfficersByExperience(officerNames);
    }

    return officerNames; // Return the array of officer names in decreasing order of experience
  }

  listOfficersByRank(tree, rankedOfficers = {}) {
    // your solution here
    return rankedOfficers;
  }
}

module.exports = StarshipEnterprise;

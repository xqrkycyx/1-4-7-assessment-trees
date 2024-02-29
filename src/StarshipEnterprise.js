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
    return values;
  }

  listOfficersByExperience(officerNames = []) {
    // your solution here
    return officerNames;
  }

  listOfficersByRank(tree, rankedOfficers = {}) {
    // your solution here
    return rankedOfficers;
  }
}

module.exports = StarshipEnterprise;

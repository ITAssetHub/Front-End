import React from "react";
import "../css/hostsDropDown.css"

const HostsDropdown = ({ hosts }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "flex-start" }}>
      {/* Dropdown para Critical Hosts */}
      <div>
        <label htmlFor="critical-hosts-dropdown">Critical Hosts:</label>
        <select id="critical-hosts-dropdown" style={{ marginLeft: "10px", padding: "5px" }}>
          <option value="">Selecione...</option>
          {hosts["CRITICAL HOSTS"].map((host) => (
            <option key={host[0]} value={host[1]}>
              {host[1]} - {host[2].toFixed(2)}%
            </option>
          ))}
        </select>
      </div>

      {/* Dropdown para Warning Hosts */}
      <div>
        <label htmlFor="warning-hosts-dropdown">Warning Hosts:</label>
        <select id="warning-hosts-dropdown" style={{ marginLeft: "10px", padding: "5px" }}>
          <option value="">Selecione...</option>
          {hosts["WARNING HOSTS"].map((host) => (
            <option key={host[0]} value={host[1]}>
              {host[1]} - {host[2].toFixed(2)}%
            </option>
          ))}
        </select>
      </div>

      {/* Dropdown para Normal Hosts */}
      <div>
        <label htmlFor="normal-hosts-dropdown">Normal Hosts:</label>
        <select id="normal-hosts-dropdown" style={{ marginLeft: "10px", padding: "5px" }}>
          <option value="">Selecione...</option>
          {hosts["NORMAL HOSTS:"].map((host) => (
            <option key={host[0]} value={host[1]}>
              {host[1]} - {host[2].toFixed(2)}%
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default HostsDropdown;
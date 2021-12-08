import React from "react";

const Select = ({ state }) => {
    return (
        <select
            className='role-selector'
            value={state.role}
            name='Choose Roles'
            onChange={(e) => state.setRole(e.target.value)}
        >
            <option value='listener'>🎧 Ouvinte</option>
            <option value='speaker'>🎤 Locutor </option>
            <option value='moderator'>⭐ Moderador</option>
        </select>
    );
};

export default Select;

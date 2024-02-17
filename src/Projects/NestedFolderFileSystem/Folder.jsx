import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Folder = ({ explorer }) => {
    const [expand, setExpand] = useState(false)

    const mainStyle = {
        display: "flex",
        flexDirection: "column",
        textAlign: "start"
    }

    if (explorer.isFolder) {
        return (
            <div style={mainStyle}>
                <span onClick={() => setExpand(!expand)}>
                    {explorer.name}
                    <br />
                </span>

                <div style={{ display: expand ? "flex" : "none", paddingLeft: "15px", flexDirection: "column", textAlign: "start" }}>
                    {explorer.items.map((exp, index) => {
                        return <Folder key={index} explorer={exp} />
                    })}
                </div>
            </div>
        )
    } else {
        return <span> {explorer.name} <br /></span>
    }

}

Folder.propTypes = {
    explorer: PropTypes.object.isRequired // Validate explorer prop
};

export default Folder

import React from 'react'
import Folder from './Folder'
import explorer from './folderData'

const NestedFolderFileSystem = () => {
    return (
        <div>
            <Folder explorer={explorer} />
        </div>
    )
}

export default NestedFolderFileSystem

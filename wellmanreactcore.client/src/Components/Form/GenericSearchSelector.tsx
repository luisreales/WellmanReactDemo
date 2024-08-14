import React, { useState, useRef, useEffect } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';

interface GenericItem {
    id: string | number;
    name: string;
    children?: GenericItem[];
}

interface GenericSearchSelectorProps {
    data: GenericItem[];
    labelKey: keyof GenericItem;
    childrenKey: keyof GenericItem;
    placeholder: string;
}

const GenericSearchSelector: React.FC<GenericSearchSelectorProps> = ({ data, labelKey, childrenKey, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedNodes, setExpandedNodes] = useState([]);
    const [selectedNode, setSelectedNode] = useState(null);
    const containerRef = useRef(null);

    const handleToggle = (name) => {
        setExpandedNodes((prevState) =>
            prevState.includes(name)
                ? prevState.filter((node) => node !== name)
                : [...prevState, name]
        );
    };

    const handleNodeSelect = (node) => {
        setSelectedNode(node);
        setIsOpen(false);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
    };

    const handleClickOutside = (event) => {
        if (containerRef.current && !containerRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const filteredData = data.filter((item) => {
        const filteredChildren = item[childrenKey].filter((child) =>
            child[labelKey].toLowerCase().includes(searchTerm)
        );
        return (
            item[labelKey].toLowerCase().includes(searchTerm) || filteredChildren.length > 0
        );
    });

    return (
        <div className="generic-selector" ref={containerRef} style={{ position: 'relative' }}>
            <TextField
                name={placeholder}
                variant="outlined"
                value={selectedNode ? selectedNode[labelKey] : ''}
                onClick={() => setIsOpen(!isOpen)}
                fullWidth
                InputProps={{
                    readOnly: true,
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton>
                                <ExpandMoreIcon />
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            {isOpen && (
                <div
                    className="dropdown"
                    style={{
                        position: 'absolute',
                        width: '100%',
                        backgroundColor: '#fff',
                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                        borderRadius: '8px',
                        marginTop: '5px',
                        zIndex: 1000,
                        maxHeight: '300px',
                        overflowY: 'auto'
                    }}
                >
                    <TextField
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        variant="outlined"
                        fullWidth
                        style={{
                            marginBottom: '10px',
                            padding: '10px',
                            paddingLeft: '15px'
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <div className="list">
                        {filteredData.map((item) => (
                            <div key={item.id}>
                                <div
                                    style={{
                                        padding: '10px',
                                        cursor: 'pointer',
                                        fontWeight: 'bold',
                                        backgroundColor: expandedNodes.includes(item[labelKey]) ? '#f5f5f5' : '#fff',
                                        borderTop: '1px solid #eee',
                                        color: '#333'
                                    }}
                                    onClick={() => handleToggle(item[labelKey])}
                                >
                                    <IconButton size="small">
                                        <ExpandMoreIcon />
                                    </IconButton>
                                    {item[labelKey]}
                                </div>
                                {expandedNodes.includes(item[labelKey]) && (
                                    <div style={{ paddingLeft: '20px' }}>
                                        {item[childrenKey].map((child) => (
                                            <div
                                                key={child.id}
                                                style={{
                                                    padding: '8px 0',
                                                    cursor: 'pointer',
                                                    borderTop: '1px solid #eee',
                                                    paddingLeft: '20px',
                                                    color: '#555'
                                                }}
                                                onClick={() => handleNodeSelect(child)}
                                            >
                                                {child[labelKey]}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default GenericSearchSelector;

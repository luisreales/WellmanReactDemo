import React, { useState, useRef, useEffect } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import { Controller } from 'react-hook-form';

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
    name: string;
    control: any;
}

const GenericSearchSelector: React.FC<GenericSearchSelectorProps> = ({
    data, labelKey, childrenKey, placeholder, name, control
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedNodes, setExpandedNodes] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleToggle = (nodeName: string) => {
        setExpandedNodes((prevState) =>
            prevState.includes(nodeName)
                ? prevState.filter((node) => node !== nodeName)
                : [...prevState, nodeName]
        );
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
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
        const filteredChildren = (item[childrenKey] as GenericItem[] || []).filter((child) =>
            child[labelKey]?.toString().toLowerCase().includes(searchTerm)
        );
        return (
            item[labelKey]?.toString().toLowerCase().includes(searchTerm) || filteredChildren.length > 0
        );
    });

    const getDisplayValue = (value: GenericItem | null) => {
        if (!value || !value.Id) return '';
        const parentItem = data.find(item => item[childrenKey]?.some(child => child.id === value.id));
        return parentItem ? `${parentItem[labelKey]} / ${value[labelKey]}` : value[labelKey];
    };

    return (
        <div className="generic-selector" ref={containerRef} style={{ position: 'relative' }}>
            <Controller
                name={name}
                control={control}
                defaultValue=""
                render={({ field }) => (
                    <>
                        <TextField
                            {...field}
                            variant="outlined"
                            placeholder={placeholder}
                            value={getDisplayValue(field.value)}
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
                            sx={{
                                '& .MuiInputBase-input::placeholder': {
                                    color: '#CCC', // 
                                    opacity: 1, // 
                                },
                                '& .MuiInputBase-root.Mui-focused': {
                                    color: '#333', // 
                                },
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
                                    onChange={(event) => setSearchTerm(event.target.value.toLowerCase())}
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
                                        <div key={uuidv4()}>
                                            <div
                                                style={{
                                                    padding: '10px',
                                                    cursor: 'pointer',
                                                    fontWeight: 'bold',
                                                    backgroundColor: expandedNodes.includes(item[labelKey] as string) ? '#f5f5f5' : '#fff',
                                                    borderTop: '1px solid #eee',
                                                    color: '#333'
                                                }}
                                                onClick={() => handleToggle(item[labelKey] as string)}



                                            >
                                                <IconButton size="small">
                                                    <ExpandMoreIcon />
                                                </IconButton>
                                                {item[labelKey]}
                                            </div>
                                            {expandedNodes.includes(item[labelKey] as string) && (
                                                <div style={{ paddingLeft: '20px' }}>
                                                    {(item[childrenKey] as GenericItem[] || []).map((child) => (
                                                        <div
                                                            key={uuidv4()}
                                                            style={{
                                                                padding: '8px 0',
                                                                cursor: 'pointer',
                                                                borderTop: '1px solid #eee',
                                                                paddingLeft: '20px',
                                                                color: '#555'
                                                            }}
                                                            onClick={() => {
                                                                setIsOpen(false);
                                                                field.onChange(child);
                                                            }}
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
                    </>
                )}
            />
        </div>
    );
};

export default GenericSearchSelector;

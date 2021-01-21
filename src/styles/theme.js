const globalTheme = {
    switchWidth: '40px',
    switchHeight: '20px',
    switchPadding: '3px',
    colorContrastLow: '#d3d3d4',
    colorWhite: '#FFF',
    switchColorPrimary: '#302C40',
    switchAnimationDuration: '0.2s',
    gradient: 'linear-gradient(to right, #0F2027, #203A43, #2C5364)',
    colorGreen: '#5DC399',
    colorGray: '#adadad',
    dashboardBackground: '#eee',
    darkColor: '#000000',
    newTasks: '#4504b5',
    completedTasks: '#068f21',
    progessTasks: '#dbb902',
}

export const lightTheme = {
    primary: '#FFF',
    secondary: '#F8F8F9',
    dashboardbg: '#f1f4f6',
    textColor: '#585280',
    header: '#585280',
    headerNumber: '#FFF',
    activeMenu: '#585280',
    ...globalTheme
}

export const darkTheme = {
    primary: '#302C40',
    secondary: '#2C2839',
    textColor: '#FFF',
    header: '#FFF',
    headerNumber: '#585280',
    activeMenu: '#FFF',
    ...globalTheme
}
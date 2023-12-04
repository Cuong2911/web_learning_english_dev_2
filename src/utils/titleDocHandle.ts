export const TabTitleHandle = (newTitle: string | undefined) => {
    return (document.title = newTitle ? newTitle : 'Learn English Web');
};

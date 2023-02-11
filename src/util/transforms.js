export function getReadableText(text) {
    const spacedText = text.replace(/([A-Z])/g, " $1");
    return `${spacedText.charAt(0).toUpperCase()}${spacedText.slice(1)}`;
}
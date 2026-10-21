function RatingScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'battery' ? '🔋' : '⚡'
    return (
        <div>
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}
export default RatingScale
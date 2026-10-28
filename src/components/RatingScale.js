function RatingScale({ scaleValue, ratingType, phoneName }) {
  const range = [1, 2, 3]

  const handleClick = () => {
    if (ratingType === 'battery') {
      if (scaleValue === 1) {
        alert(phoneName + "\n\nBatterie: Faible autonomie (3000 mAh)\nAutonomie: 12h max - Usage occasionnel")
      }
      if (scaleValue === 2) {
        alert(phoneName + "\n\nBatterie: Bonne autonomie (4500 mAh)\nAutonomie: 1 jour complet - Charge rapide")
      }
      if (scaleValue === 3) {
        alert(phoneName + "\n\nBatterie: Excellente autonomie (5000+ mAh)\nAutonomie: 2 jours - Usage intensif")
      }
    } else {
      if (scaleValue === 1) {
        alert(phoneName + "\n\nPerformance: Standard\nProcesseur entrée de gamme - Réseaux sociaux")
      }
      if (scaleValue === 2) {
        alert(phoneName + "\n\nPerformance: Élevée\nProcesseur Octa-core - Multitâche et jeux")
      }
      if (scaleValue === 3) {
        alert(phoneName + "\n\nPerformance: Premium\nDernier processeur - Gaming et création pro")
      }
    }
  }

  const icon = ratingType === 'battery' ? '🔋' : '⚡'
  const label = ratingType === 'battery' ? 'Batterie' : 'Performance'

  return (
    <div onClick={handleClick} style={{display:'flex', gap:'8px', cursor:'pointer'}}>
      <span style={{color:'#888', fontSize:'12px', width:'75px'}}>{label}:</span>
      <div style={{display:'flex', gap:'2px'}}>
        {range.map((n) => scaleValue >= n ? <span key={n}>{icon}</span> : <span key={n} style={{opacity:0.15}}>{icon}</span>)}
      </div>
    </div>
  )
}

export default RatingScale

type storyProps = {
  data: string,
  sport: string
  team: string
}

const Story = ({data, sport, team}: storyProps) => {
  console.log(data, sport, team)
  return (
    <div className="tidbit">
      <div className="data-heading">
        <p className="sport"><b>Sport:</b> {sport.toUpperCase()}</p>
        <p className="team"><b>Team:</b> {team}</p>
      </div>
      <p>{data}</p>
    </div>
  )
}

export default Story;
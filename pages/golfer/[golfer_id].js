import { useRouter } from 'next/router'
import ScoreCard from '../../components/ScoreCard'
import Layout from '../../components/Layout'
import useGolfer from '../../lib/useGolfer'



export default function Page() {
  const router = useRouter()
  const paramGolferId = router.query.golfer_id
  const { golfer, error } = useGolfer(paramGolferId)
  let golferScores
  let golferName
  if (golfer){
    golferScores = golfer.golfer_scores
    golferName = golfer.golfer_name
  }

  return (
    <Layout>
      <p>{golferName}</p>
      <>
        {error ? (
          error
        ) : (
          <>
            {golferScores && golferScores.map(score => (
              <ScoreCard
                key={score.id}
                id={score.id}
                totalScore={score.total_score}
                playedAt={score.played_at}
                userId={score.user_id}
                userName={score.user_name}
              />
            ))}
          </>
        )}
      </>
    </Layout>
  )
}


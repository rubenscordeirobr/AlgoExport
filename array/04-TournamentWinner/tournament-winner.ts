export function tournamentWinner(competitions: string[][], results: number[]) {

    // Write your code here.
    const scores: Record<string, number> = {};
    let highestScore: number = 0;
    let currentWinner: string = '';

    for (let i = 0; i < competitions.length; i++) {
        const [homeTeam, awayTeam] = competitions[i];
        const winningTeam = results[i] === 1 ? homeTeam : awayTeam;
        scores[winningTeam] = (scores[winningTeam] ?? 0) + 3;

        if (scores[winningTeam] > highestScore) {
            currentWinner = winningTeam;
            highestScore = scores[winningTeam]
        }
    }
    return currentWinner;
}

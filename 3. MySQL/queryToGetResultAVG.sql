SELECT u.user_id, u.first_name, u.last_name, AVG(tr.correct) AS avarageCorrectAnswers, MAX(tr.time_taken) AS mostRecentlyTakenTest
FROM test_result tr RIGHT JOIN USER u ON tr.user_id = u.user_id
GROUP BY u.user_id
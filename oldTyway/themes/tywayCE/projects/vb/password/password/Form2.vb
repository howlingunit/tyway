Public Class Form2
    Private Sub logo_Click(sender As Object, e As EventArgs) Handles logo.Click
        MessageBox.Show("goodbye " & uname)
        Form1.Show()
        Me.Hide()
    End Sub

    Private Sub redBTN_Click(sender As Object, e As EventArgs) Handles redBTN.Click
        Me.BackColor = Color.Red

    End Sub

    Private Sub greenBTN_Click(sender As Object, e As EventArgs) Handles greenBTN.Click
        Me.BackColor = Color.Green
    End Sub

    Private Sub BlueBTN_Click(sender As Object, e As EventArgs) Handles BlueBTN.Click
        Me.BackColor = Color.Blue
    End Sub

    Private Sub defaultBTN_Click(sender As Object, e As EventArgs) Handles defaultBTN.Click
        Me.BackColor = Color.Gray
    End Sub
End Class
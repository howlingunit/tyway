Public Class Form1
    Dim amount As Integer = 0
    Dim speed As Single = 0
    Dim total As Single = 0
    Dim average As Single = 0
    Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        MessageBox.Show("bye")
        Me.Close()
    End Sub

    Private Sub btnspeed_Click(sender As Object, e As EventArgs) Handles btnspeed.Click
        speed = txtaverage.Text
        total = total + speed
        amount = amount + 1
        average = total / amount
        txtaverage.Text = CStr(average)
    End Sub

    Private Sub btnreset_Click(sender As Object, e As EventArgs) Handles btnreset.Click
        speed = 0
        amount = 0
        total = 0
        average = 0
    End Sub
End Class

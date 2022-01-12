Public Class Form1
    Private Sub loginbtn_Click(sender As Object, e As EventArgs) Handles loginbtn.Click
        If txtpasswd.Text = "Rm*" Then
            MessageBox.Show("access granted" & vbCrLf & "welcome " & txtuser.Text)
            Form2.Show()
            uname = txtuser.Text
            Me.Hide()
        Else
            MessageBox.Show("access denied" & vbCrLf & "incorrect password")
        End If
    End Sub

    Private Sub ext_Click(sender As Object, e As EventArgs) Handles ext.Click
        MessageBox.Show("goodbye " & txtuser.Text)
        Me.Close()
    End Sub
End Class

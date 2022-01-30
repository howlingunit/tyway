Public Class Form1
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        Dim i As Integer
        Dim result As Integer
        Try
            For i = 1 To 10000
                result = i * 7
                ListBox.Items.Add(result)
            Next
        Catch ex As Exception
            MessageBox.Show(ex.ToString)
            Me.Close()

        End Try
    End Sub
End Class

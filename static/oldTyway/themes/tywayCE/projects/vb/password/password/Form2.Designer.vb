<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()>
Partial Class Form2
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()>
    Protected Overrides Sub Dispose(ByVal disposing As Boolean)
        Try
            If disposing AndAlso components IsNot Nothing Then
                components.Dispose()
            End If
        Finally
            MyBase.Dispose(disposing)
        End Try
    End Sub

    'Required by the Windows Form Designer
    Private components As System.ComponentModel.IContainer

    'NOTE: The following procedure is required by the Windows Form Designer
    'It can be modified using the Windows Form Designer.  
    'Do not modify it using the code editor.
    <System.Diagnostics.DebuggerStepThrough()>
    Private Sub InitializeComponent()
        Me.logo = New System.Windows.Forms.Button()
        Me.Label1 = New System.Windows.Forms.Label()
        Me.Label3 = New System.Windows.Forms.Label()
        Me.redBTN = New System.Windows.Forms.Button()
        Me.defaultBTN = New System.Windows.Forms.Button()
        Me.greenBTN = New System.Windows.Forms.Button()
        Me.BlueBTN = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'logo
        '
        Me.logo.Location = New System.Drawing.Point(2, 235)
        Me.logo.Name = "logo"
        Me.logo.Size = New System.Drawing.Size(75, 23)
        Me.logo.TabIndex = 0
        Me.logo.Text = "log out"
        Me.logo.UseVisualStyleBackColor = True
        '
        'Label1
        '
        Me.Label1.AutoSize = True
        Me.Label1.Font = New System.Drawing.Font("Lucida Console", 12.0!, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label1.Location = New System.Drawing.Point(8, 9)
        Me.Label1.Name = "Label1"
        Me.Label1.Size = New System.Drawing.Size(128, 16)
        Me.Label1.TabIndex = 2
        Me.Label1.Text = "admin pannel"
        '
        'Label3
        '
        Me.Label3.AutoSize = True
        Me.Label3.Font = New System.Drawing.Font("Lucida Console", 10.0!, System.Drawing.FontStyle.Italic)
        Me.Label3.Location = New System.Drawing.Point(12, 38)
        Me.Label3.Name = "Label3"
        Me.Label3.Size = New System.Drawing.Size(63, 14)
        Me.Label3.TabIndex = 4
        Me.Label3.Text = "colour:"
        '
        'redBTN
        '
        Me.redBTN.Location = New System.Drawing.Point(15, 55)
        Me.redBTN.Name = "redBTN"
        Me.redBTN.Size = New System.Drawing.Size(26, 23)
        Me.redBTN.TabIndex = 5
        Me.redBTN.Text = "R"
        Me.redBTN.UseVisualStyleBackColor = True
        '
        'defaultBTN
        '
        Me.defaultBTN.Location = New System.Drawing.Point(15, 84)
        Me.defaultBTN.Name = "defaultBTN"
        Me.defaultBTN.Size = New System.Drawing.Size(94, 23)
        Me.defaultBTN.TabIndex = 6
        Me.defaultBTN.Text = "default"
        Me.defaultBTN.UseVisualStyleBackColor = True
        '
        'greenBTN
        '
        Me.greenBTN.Location = New System.Drawing.Point(51, 55)
        Me.greenBTN.Name = "greenBTN"
        Me.greenBTN.Size = New System.Drawing.Size(26, 23)
        Me.greenBTN.TabIndex = 7
        Me.greenBTN.Text = "G"
        Me.greenBTN.UseVisualStyleBackColor = True
        '
        'BlueBTN
        '
        Me.BlueBTN.Location = New System.Drawing.Point(83, 55)
        Me.BlueBTN.Name = "BlueBTN"
        Me.BlueBTN.Size = New System.Drawing.Size(26, 23)
        Me.BlueBTN.TabIndex = 8
        Me.BlueBTN.Text = "Button4"
        Me.BlueBTN.UseVisualStyleBackColor = True
        '
        'Form2
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(284, 261)
        Me.Controls.Add(Me.BlueBTN)
        Me.Controls.Add(Me.greenBTN)
        Me.Controls.Add(Me.defaultBTN)
        Me.Controls.Add(Me.redBTN)
        Me.Controls.Add(Me.Label3)
        Me.Controls.Add(Me.Label1)
        Me.Controls.Add(Me.logo)
        Me.Name = "Form2"
        Me.Text = "Form2"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents logo As Button
    Friend WithEvents Label1 As Label
    Friend WithEvents Label3 As Label
    Friend WithEvents redBTN As Button
    Friend WithEvents defaultBTN As Button
    Friend WithEvents greenBTN As Button
    Friend WithEvents BlueBTN As Button
End Class

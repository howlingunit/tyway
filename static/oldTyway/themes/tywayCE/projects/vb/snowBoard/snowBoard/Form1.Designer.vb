<Global.Microsoft.VisualBasic.CompilerServices.DesignerGenerated()> _
Partial Class Form1
    Inherits System.Windows.Forms.Form

    'Form overrides dispose to clean up the component list.
    <System.Diagnostics.DebuggerNonUserCode()> _
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
    <System.Diagnostics.DebuggerStepThrough()> _
    Private Sub InitializeComponent()
        Me.lblspeed = New System.Windows.Forms.Label()
        Me.txtspeed = New System.Windows.Forms.TextBox()
        Me.Label2 = New System.Windows.Forms.Label()
        Me.txtaverage = New System.Windows.Forms.TextBox()
        Me.btnspeed = New System.Windows.Forms.Button()
        Me.btnreset = New System.Windows.Forms.Button()
        Me.Button3 = New System.Windows.Forms.Button()
        Me.SuspendLayout()
        '
        'lblspeed
        '
        Me.lblspeed.AutoSize = True
        Me.lblspeed.Font = New System.Drawing.Font("Lucida Console", 12.0!, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.lblspeed.Location = New System.Drawing.Point(12, 9)
        Me.lblspeed.Name = "lblspeed"
        Me.lblspeed.Size = New System.Drawing.Size(58, 16)
        Me.lblspeed.TabIndex = 0
        Me.lblspeed.Text = "speed"
        '
        'txtspeed
        '
        Me.txtspeed.Location = New System.Drawing.Point(86, 5)
        Me.txtspeed.Name = "txtspeed"
        Me.txtspeed.Size = New System.Drawing.Size(100, 20)
        Me.txtspeed.TabIndex = 1
        '
        'Label2
        '
        Me.Label2.AutoSize = True
        Me.Label2.Font = New System.Drawing.Font("Lucida Console", 12.0!, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Label2.Location = New System.Drawing.Point(12, 38)
        Me.Label2.Name = "Label2"
        Me.Label2.Size = New System.Drawing.Size(78, 16)
        Me.Label2.TabIndex = 2
        Me.Label2.Text = "Average"
        '
        'txtaverage
        '
        Me.txtaverage.Location = New System.Drawing.Point(86, 38)
        Me.txtaverage.Name = "txtaverage"
        Me.txtaverage.ReadOnly = True
        Me.txtaverage.Size = New System.Drawing.Size(100, 20)
        Me.txtaverage.TabIndex = 3
        '
        'btnspeed
        '
        Me.btnspeed.Font = New System.Drawing.Font("Lucida Console", 12.0!, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnspeed.Location = New System.Drawing.Point(192, 2)
        Me.btnspeed.Name = "btnspeed"
        Me.btnspeed.Size = New System.Drawing.Size(112, 52)
        Me.btnspeed.TabIndex = 4
        Me.btnspeed.Text = "enter speed"
        Me.btnspeed.UseVisualStyleBackColor = True
        '
        'btnreset
        '
        Me.btnreset.Font = New System.Drawing.Font("Lucida Console", 12.0!, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.btnreset.Location = New System.Drawing.Point(12, 136)
        Me.btnreset.Name = "btnreset"
        Me.btnreset.Size = New System.Drawing.Size(78, 28)
        Me.btnreset.TabIndex = 5
        Me.btnreset.Text = "reset"
        Me.btnreset.UseVisualStyleBackColor = True
        '
        'Button3
        '
        Me.Button3.Font = New System.Drawing.Font("Lucida Console", 12.0!, System.Drawing.FontStyle.Italic, System.Drawing.GraphicsUnit.Point, CType(0, Byte))
        Me.Button3.Location = New System.Drawing.Point(220, 136)
        Me.Button3.Name = "Button3"
        Me.Button3.Size = New System.Drawing.Size(84, 28)
        Me.Button3.TabIndex = 6
        Me.Button3.Text = "exit"
        Me.Button3.UseVisualStyleBackColor = True
        '
        'Form1
        '
        Me.AutoScaleDimensions = New System.Drawing.SizeF(6.0!, 13.0!)
        Me.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font
        Me.ClientSize = New System.Drawing.Size(316, 180)
        Me.Controls.Add(Me.Button3)
        Me.Controls.Add(Me.btnreset)
        Me.Controls.Add(Me.btnspeed)
        Me.Controls.Add(Me.txtaverage)
        Me.Controls.Add(Me.Label2)
        Me.Controls.Add(Me.txtspeed)
        Me.Controls.Add(Me.lblspeed)
        Me.Name = "Form1"
        Me.Text = "Form1"
        Me.ResumeLayout(False)
        Me.PerformLayout()

    End Sub

    Friend WithEvents lblspeed As Label
    Friend WithEvents txtspeed As TextBox
    Friend WithEvents Label2 As Label
    Friend WithEvents txtaverage As TextBox
    Friend WithEvents btnspeed As Button
    Friend WithEvents btnreset As Button
    Friend WithEvents Button3 As Button
End Class

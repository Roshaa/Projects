Module Module1

    Dim sqCon As New SqlClient.SqlConnection("Server=PC1;;Database=AdventureWorks2022; Trusted_Connection=Yes;")
    Dim sqCmd As New SqlClient.SqlCommand
    Dim sdrRow As SqlClient.SqlDataReader


    Sub Main()
        While True
            Console.WriteLine("Enter a command:")
            Dim command As String = Console.ReadLine()

            If command.ToLower() = "exit" Then
                Exit While
            End If

            'switch case menu
            Select Case command.ToLower()

                Case "insert"
                    insertData()
                Case "select"
                    console.writeline("Choose the number of values to display: ")
                    Dim a As Integer = console.readline()
                    SelectData(a)
                Case "selespecific"
                    console.writeline("Enter the AddressID: ")
                    Dim b As Integer = console.readline()
                    SelectSpecific(b)

                Case Else
                    Console.WriteLine("Invalid command")
            End Select





        End While
    End Sub

    Sub insertData()
        sqCon.Open()
        Console.Writeline("Enter AddressLine1")
        Dim inputaddressline1 As String = console.readline()
        Console.Writeline("Enter AddressLine2")
        Dim inputaddressline2 As String = console.readline()
        Console.Writeline("Enter City")
        Dim inputcity As String = console.readline()
        Console.Writeline("Enter StateProvinceID")
        Dim inputstateprovinceid As Integer = console.readline()
        Console.Writeline("Enter PostalCode")
        Dim inputpostalcode As Integer = console.readline()

        Dim checkduplicate As String = "select * from Person.Address where AddressLine1 = @addressline1 and AddressLine2 = @addressline2 and City = @city and StateProvinceID = @stateprovinceid and PostalCode = @postalcode"
        Dim sqlquerycmdcheck As New SqlClient.SqlCommand(checkduplicate, sqCon)

        sqlquerycmdcheck.Parameters.AddWithValue("@addressline1", inputaddressline1)
        sqlquerycmdcheck.Parameters.AddWithValue("@addressline2", inputaddressline2)
        sqlquerycmdcheck.Parameters.AddWithValue("@city", inputcity)
        sqlquerycmdcheck.Parameters.AddWithValue("@stateprovinceid", inputstateprovinceid)
        sqlquerycmdcheck.Parameters.AddWithValue("@postalcode", inputpostalcode)

        Dim sdrRowcheck As SqlClient.SqlDataReader = sqlquerycmdcheck.ExecuteReader()

        If Not sdrRowcheck.HasRows Then

            sdrRowcheck.Close()
            Dim query As String = "INSERT INTO Person.Address (AddressLine1, AddressLine2,City,StateProvinceID,PostalCode)
VALUES (@inputaddressline1, @inputaddressline2, @inputcity, @inputstateprovinceid,@inputpostalcode)"
            Dim sqlquerycmd As New SqlClient.SqlCommand(query, sqCon)

            sqlquerycmd.Parameters.AddWithValue("@inputaddressline1", inputaddressline1)
            sqlquerycmd.Parameters.AddWithValue("@inputaddressline2", inputaddressline2)
            sqlquerycmd.Parameters.AddWithValue("@inputcity", inputcity)
            sqlquerycmd.Parameters.AddWithValue("@inputstateprovinceid", inputstateprovinceid)
            sqlquerycmd.Parameters.AddWithValue("@inputpostalcode", inputpostalcode)

            sqlquerycmd.ExecuteNonQuery()
        Else
            Console.Writeline("Data already exists")
        End If
        sdrRowcheck.Close()
        sqCon.Close()
    End Sub

    Sub SelectData(a)
        sqCon.Open()
        sqCmd.Connection = sqCon
        sqCmd.CommandText = String.Format("select top {0} * from Person.Address order by AddressID desc", a)


        sqCmd.ExecuteNonQuery()
        sdrRow = sqCmd.ExecuteReader()

        For Each itm In sdrRow
            Console.WriteLine("{0} {1} {2}", sdrRow.GetValue(0), sdrRow.GetValue(1), sdrRow.GetValue(2))
        Next

        sdrRow.Close()
        sqCon.Close()
    End Sub

    Sub SelectSpecific(b)
        sqCon.Open()
        sqCmd.Connection = sqCon
        sqCmd.CommandText = String.format("select * from person.address where AddressID = {0}", b)

        sqCmd.executeNonQuery()
        sdrRow = sqCmd.ExecuteReader()
        For Each item In sdrRow
            Console.Writeline("{0}{1}{2}{3}", sdrRow.getvalue(0), sdrRow.getvalue(1), sdrRow.getvalue(2), sdrRow.getvalue(3), )
        Next


        sdrRow.Close()
        sqCon.Close()
    End Sub


End Module
